import { createSelector } from 'reselect';

const selectReturn = (state) => state.lines;

const makeSelectList = (attribute) => createSelector(
    selectReturn,
    (state) => state.list[attribute]
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');


export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks
};
