import { useState, useCallback } from 'react';

const useStateToggleHandlers = (defaultState = false): [boolean, () => void, () => void] => {
    const [state, setState] = useState<boolean>(defaultState);

    const memoizedEnableState = useCallback(
        () => {
            setState(true);
        },
        [true],
    );

    const memoizedDisableState = useCallback(
        () => {
            setState(false);
        },
        [false],
    );

    return [state, memoizedEnableState, memoizedDisableState];
};

export default useStateToggleHandlers;