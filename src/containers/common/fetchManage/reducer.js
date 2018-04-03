import * as keys from '../resourcesConstants';

const composeObjectName = (match, p1) => {
    return p1.toUpperCase();
};

const actionTypeRegexp = /\w+?_(\w+)_(PENDING|REJECTED|FULFILLED)/;
const storeNameRegexp = /_(\w)/g;

const getActionPromise = type => {
    const captureResults = actionTypeRegexp.exec(type);

    if (!captureResults) return {};

    const storeName = captureResults[1];
    const status = captureResults[2];

    return { storeName, status };
};

const defaultPromiseStatus = {
    fetching: false,
    fetched: false,
    error: null
};

const defaultState = {
    [keys.RETURN_TYPES]: defaultPromiseStatus,
    [keys.RETURN_REASONS]: defaultPromiseStatus,
    [keys.RETURN_SUBREASONS]: defaultPromiseStatus,
    [keys.WAREHOUSE_NAMES]: defaultPromiseStatus,
    [keys.COLORS]: defaultPromiseStatus,
    [keys.CATEGORIES]: defaultPromiseStatus,
    [keys.SIZES]: defaultPromiseStatus,
    [keys.BRANDS]: defaultPromiseStatus,
    [keys.RETURN]: defaultPromiseStatus,
    [keys.DETAIL_RETURN_LINES]: defaultPromiseStatus,
    [keys.PRODUCT]: defaultPromiseStatus,
    [keys.DETAIL_LINE]: defaultPromiseStatus
};

export default (state = defaultState, { type, payload }) => {
    const { storeName, status } = getActionPromise(type);

    if (!defaultState[storeName]) return state;

    switch (status) {
        case 'PENDING':
            return {
                ...state,
                [storeName]: {
                    fetching: true,
                    fetched: false,
                    error: null
                }
            };
        case 'REJECTED':
            return {
                ...state,
                [storeName]: {
                    fetching: false,
                    fetched: false,
                    error: payload
                }
            };
        case 'FULFILLED':
            return {
                ...state,
                [storeName]: {
                    fetching: false,
                    fetched: true,
                    error: null
                }
            };
    }

    return state;
};
