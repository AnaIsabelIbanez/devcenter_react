import { createSelector } from 'reselect';

const selectApp = (state) => {
    return state.global;
};

const makeSelect = (attribute) => createSelector(
    selectApp,
    (appState) => appState[attribute]
);

const makeSelectApp = (attribute) => createSelector(
    selectApp,
    (appState) => appState.app[attribute]
);

const getUser = () => createSelector(
    selectApp,
    (state) => state.user.user
);

const getModalOptions = () => makeSelect('modal');
const getActiveTab = () => makeSelectApp('activeTab');

export {
    selectApp,
    getUser,
    getModalOptions,
    getActiveTab
};
