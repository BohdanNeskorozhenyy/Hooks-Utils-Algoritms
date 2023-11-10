import { useState, useRef, useEffect } from 'react';

const ONE_SECOND = 1000;

function useFibonacciInterval(callback: () => void | Promise<void>, stopInscreaseIntervalInCount?: number): [ () => void, () => void ] {
    const [running, setRunning] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const fibonacciSequence = useRef([0, ONE_SECOND]);

    useEffect(() => {
        const tick = async () => {
            if (running) {
                try {
                    await callback();
                } catch (e) {
                    console.error(e);
                }
                if (stopInscreaseIntervalInCount === fibonacciSequence.current[1]) {
                    timeoutRef.current = setTimeout(tick, stopInscreaseIntervalInCount);
                } else {
                    const nextDelay = fibonacciSequence.current[0] + fibonacciSequence.current[1];
                    fibonacciSequence.current = [fibonacciSequence.current[1], nextDelay];
                    timeoutRef.current = setTimeout(tick, nextDelay);
                }
            }
        };

        if (running && timeoutRef.current === null) {
            timeoutRef.current = setTimeout(tick, ONE_SECOND);
        }

        return () => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, [running]);

    const startInterval = () => {
        setRunning(true);
    };

    const stopInterval = () => {
        setRunning(false);
        fibonacciSequence.current = [0, ONE_SECOND];
    };

    return [startInterval, stopInterval];
}

export default useFibonacciInterval;
