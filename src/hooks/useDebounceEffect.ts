import { useEffect } from 'react';

type AnyFunction = (...args: any[]) => any;

function useDebounceEffect(callback: AnyFunction, delay: number, dependencies: any[]) {
    useEffect(() => {
        const timer = setTimeout(callback, delay);

        return () => {
            clearTimeout(timer);
        };
    }, dependencies);
}

export default useDebounceEffect;