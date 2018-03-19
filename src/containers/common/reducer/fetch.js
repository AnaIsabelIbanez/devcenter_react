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
    returnTypes: defaultPromiseStatus,
    returnReasons: defaultPromiseStatus,
    returnSubreasons: defaultPromiseStatus,
    warehouseNames: defaultPromiseStatus,
    colors: defaultPromiseStatus,
    categories: defaultPromiseStatus,
    sizes: defaultPromiseStatus,
    brands: defaultPromiseStatus,
    return: defaultPromiseStatus,
    detailLine: defaultPromiseStatus
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
