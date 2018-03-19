import { createSelector } from 'reselect';

const selectApp = (state) => {
    return state.global;
};

const makeSelect = (attribute) => createSelector(
    selectApp,
    (appState) => appState[attribute]
);

const getUser = (attribute) => createSelector(
    selectApp,
    (state) => state.user.user
);

const getModalOptions = () => makeSelect('modal');

export {
    selectApp,
    getUser,
    getModalOptions
};
