import { MutableRefObject, useEffect } from 'react';

function useClickOutside<T extends HTMLElement>(ref: MutableRefObject<T | null>, handler: (event: Event) => void) {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('click', listener, true);
        document.addEventListener('touchstart', listener, true);

        return () => {
            document.removeEventListener('click', listener, true);
            document.removeEventListener('touchstart', listener, true);
        };
    }, [ref, handler]);
}

export default useClickOutside;