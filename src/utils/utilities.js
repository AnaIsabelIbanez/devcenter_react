import {duration} from 'moment';
import {compose} from 'ramda';
import moment from 'moment/moment';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {dateFormat} from '../containers/App/constants';


const pad = (t) => t < 10 ? `0${t}` : `${t}`;

const formatMoment = (m) => `${pad(m.hours())}:${pad(m.minutes())}:${pad(m.seconds())}`;

export const timeToString = compose(formatMoment, duration);
export const formatIsoString = (isoStringValue) => moment(isoStringValue).format(dateFormat);

export const getCalendarDay = (momentObject) => {
    return momentObject.calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: dateFormat
    });
};

export const getHour = (momentObject) => {
    return momentObject.format('HH:mm');
};

export const getMomentByIsoString = (isoString) => {
    return moment(isoString);
};

export const addDays = (moment, days) => {
    return moment.add(days, 'days');
};

export const storeInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
};

export const removeFromLocalStorage = key => {
    localStorage.removeItem(key);
};

export const findStorageItems = (text) => {
    let item;
    let results = [];
    for (item in localStorage) {
        if (item.match(text) && localStorage.getItem(item)) {
            const value = JSON.parse(localStorage.getItem(item));
            results.push({key: item, val: value});
        }
    }
    return results;
};

export const getType = (constant, resource) => {
    return `${constant}_${resource}`;
};

export const clearEmptyValues = (objectData) => {
    let newObj = {};
    Object.keys(objectData).forEach((objKey) => {
        const value = objectData[objKey];
        if (value) {
            newObj = {...newObj, [objKey]: value};
        }
    });
    return newObj;
};

export const removeKeys = (objectData, regularExpresion) => {
    let newObj = {};
    Object.keys(objectData).forEach((objKey) => {
        if (!regularExpresion.test(objKey)) {
            newObj = {...newObj, [objKey]: objectData[objKey]};
        }
    });
    return newObj;
};

export  const getLiteral = (id, values = {}) => {
    return <FormattedMessage id={id} values={values} />;
};

const getFileType = file => {
    if (!file.name && !file.type) {
        return 'UNKNOWN';
    }

    let type = '';
    if (file.type) {
        const fileType = ((file && file.type) || type).split('/');
        type = fileType[1] || fileType[0];
    } else {
        const nameSplit = file.name.split('.');
        type = nameSplit[nameSplit.length - 1];
    }
    type = type === 'jpeg' ? 'jpg' : type;
    type = type === 'x-zip-compressed' ? 'zip' : type;
    return type;
};

export function validateFileType(file, types = []) {
    const type = getFileType(file);
    return { result: types.includes(type), type, name: file.name };
}

export function validateFilesType(files = [], filesConf = {}) {
    const types = Object.keys(filesConf);
    const fileInvalid = files
        .map(file => validateFileType(file, types))
        .find(fileResult => !fileResult.result);

    return (
        fileInvalid || { result: true, type: null, maxSize: null, name: null }
    );
}

export const objIsEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};

export const mbToBytes = mb => mb * 1024 * 1024;

export const bytesToMb = bytes => parseFloat(bytes / 1024 / 1024).toFixed(2);

export const validateFileSize = (file, filesConf = {}) => {
    const type = getFileType(file);
    const maxSize = (filesConf[type] && filesConf[type].maxSize) || 0;

    return {
        result: !maxSize || maxSize < 0 ? true : file.size < mbToBytes(maxSize),
        maxSize,
        size: bytesToMb(file.size),
        name: file.name
    };
};

export function validateFilesSize(files = [], filesConf = {}) {
    const fileInvalid = files
        .map(file => validateFileSize(file, filesConf))
        .find(fileResult => !fileResult.result);

    return (
        fileInvalid || { result: true, type: null, maxSize: null, name: null }
    );
}
