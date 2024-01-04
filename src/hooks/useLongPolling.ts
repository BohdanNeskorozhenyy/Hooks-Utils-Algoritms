import { useRef, useEffect } from 'react';
import AbortController from 'abort-controller';

const defaultConfig = {
    delay: 10 * 1000,
    onStep: undefined,
    onFinish: undefined,
    onStop: undefined,
    onError: undefined,
    continueOnLastArrayDelay: false,
};

const useLongPolling = (stepCallback, config = defaultConfig) => {
    const {
        delay = defaultConfig.delay,
        onStep,
        onFinish,
        onError,
        continueOnLastArrayDelay = defaultConfig.continueOnLastArrayDelay,
    } = config;

    const timeout = useRef();
    const abortController = useRef();
    const iSUnMounted = useRef(false);
    const stepReff = useRef(0);

    const stopPolling = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
            timeout.current = null;

            return abortController.current?.abort();
        }
    };

    const subscribe = (step = 0) => {
        stepReff.current = step;

        const timeDelay = (
            Array.isArray(delay)
                // If we want to continue with last delay from array of delays
                ? !delay[step] && continueOnLastArrayDelay
                    ? delay[delay.length - 1]
                    : delay[step]
                : delay
        );

        if (typeof timeDelay !== 'number') {
            if (typeof onFinish === 'function') {
                onFinish();
            }

            clearTimeout(timeout.current);
            timeout.current = null;

            return;
        }

        if (!iSUnMounted.current) {
            timeout.current = setTimeout(async () => {
                try {
                    abortController.current = new AbortController();
                    const result = await stepCallback(abortController.current.signal);

                    if (typeof onStep === 'function') {
                        const nextStep = step + 1;
                        const isSubscribe = onStep(result, nextStep);

                        if (isSubscribe) {
                            subscribe(nextStep);

                            return;
                        }

                        if (typeof onFinish === 'function') {
                            onFinish(result, nextStep);
                        }
                    }

                    clearTimeout(timeout.current);
                    timeout.current = null;
                } catch (error) {
                    console.error(error);
                    if (typeof onError === 'function') {
                        const isSubscribe = onError(error);

                        if (isSubscribe) {
                            return subscribe(step + 1);
                        }
                    }

                    clearTimeout(timeout.current);
                    timeout.current = null;
                }
            }, step === 0 ? step : timeDelay);
        }
    };

    const skipStep = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
            timeout.current = null;

            return subscribe(stepReff.current + 1);
        }
    };

    // Will stop long polling on unmount
    useEffect(() => () => {
        iSUnMounted.current = true;
        stopPolling();
    }, []);

    return ({
        startPolling: () => {
            if (!timeout.current) {
                subscribe();
            }
        },
        stopPolling,
        skipStep,
    });
};

export default useLongPolling;