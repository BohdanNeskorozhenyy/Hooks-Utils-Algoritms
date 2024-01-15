import isJSON from 'utils/isJsonString';

export const get = key => {
    const item = window.localStorage.getItem(key);
    if (isJSON(item)) {
        return JSON.parse(item);
    }
    return item;
};

export const set = (key, value) => {
    if (typeof value === 'object') {
        window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        window.localStorage.setItem(key, value);
    }
};

export const update = (key, value, updateFunc) => {
    const prevValue = get(key);

    const newValue = updateFunc(prevValue);

    set(key, newValue);
};

export const remove = key => window.localStorage.removeItem(key);

export const clear = () => window.localStorage.clear();


export default {
    get,
    set,
    update,
    remove,
    clear,
};