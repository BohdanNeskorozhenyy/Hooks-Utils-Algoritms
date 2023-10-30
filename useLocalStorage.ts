import { useEffect, useState } from 'react';
import isJsonString from 'utils/isJsonString';

const UPDATE_STORAGE_EVENT = 'UPDATE_STORAGE_EVENT';

export const CUSTOM_EVENTS = {
    REFETCH_CONSULTATION_REQUESTS: 'REFETCH_CONSULTATION_REQUESTS',
    DISABLE_CREATE_EVENT_BTN_IS_THERE_IS_CONSULTATION_REQUETS: 'DISABLE_CREATE_EVENT_BTN_IS_THERE_IS_CONSULTATION_REQUETS',
};

const getLocalStarageValue = (key: any, defaultValue: any) => {
    const data = localStorage.getItem(key);
    if (data) {
        if (isJsonString(data)) {
            return JSON.parse(data);
        }
        return data;
    }
    return defaultValue;
};

const createUpdateStorageCustomEvent = (value: any, keyEvent: any) => new CustomEvent(UPDATE_STORAGE_EVENT, {
    detail: { value, keyEvent },
});

const useLocalStorageWithEvents = ({ key, defaultValue }: any) => {
    const [pageValue, setPageValue] = useState(getLocalStarageValue(key, defaultValue));

    const handler = (e: any) => {
        if (key === e.detail.keyEvent) {
            setPageValue(e.detail.value);
        }
    };

    useEffect(() => {
        window.addEventListener(UPDATE_STORAGE_EVENT, handler);

        // Add an event listener to handle localStorage changes
        window.addEventListener('storage', event => {
            if (event.key === key) {
                const { newValue } = event;
                newValue && setPageValue(JSON.parse(newValue));
            }
        });

        return () => {
            window.removeEventListener(UPDATE_STORAGE_EVENT, handler);
            window.removeEventListener('storage', () => {});
        };
    }, [key]);

    useEffect(() => {
        if (typeof pageValue === 'object') {
            localStorage.setItem(key, JSON.stringify(pageValue) || '');
        } else {
            localStorage.setItem(
                key,
                typeof pageValue === 'boolean'
                    ? pageValue
                    : pageValue || '',
            );
        }
        window.dispatchEvent(createUpdateStorageCustomEvent(pageValue, key));
    }, [pageValue, key]);

    return { pageValue, setPageValue };
};

export default useLocalStorageWithEvents;


// example of usage //

//   const { pageValue: tabs, setPageValue: setListTabs } = useLocalStorage({
//     key: "LIST_TABS",
//     defaultValue: [],
//   });
