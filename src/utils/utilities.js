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

export  const getLiteral = (id) => {
    return <FormattedMessage id={id} />;
};

export function getFileType(file) {
    let fileType = '';
    fileType = file && file.type && file.type.split('/');
    if (fileType !== '') {
        fileType = (fileType[1] || fileType[0]).toUpperCase();
    }
    return fileType;
};

export function validateFileType(file, types) {
    let fileType = getFileType(file);

    if (fileType === 'JPEG') {
        fileType = 'JPG';
    }

    return types.includes(fileType);
};

export function validateFilesType(files, types) {
    if (!types || types.length === 0) {
        return true;
    } else {
        return files.every(file => validateFileType(file, types));
    }
};

export const objIsEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};

export const mbToBytes = mb => mb * 1024 * 1024;

export const validateFilesSize = (file, maxSizeMB = 0, filesConf = {}) => {
    let maxSize = maxSizeMB;
    let fileType = '';

    if (!objIsEmpty(filesConf)) {
        fileType = file && file.type && file.type.split('/');
        if (fileType !== '') {
            fileType = (fileType[1] || fileType[0]).toUpperCase();
        }

        if (fileType === 'JPEG') {
            fileType = 'JPG';
        }

        maxSize = (filesConf[fileType] && filesConf[fileType].maxSize) || 0;
    }

    return {
        result: (!maxSize || maxSize < 0) ? true : file.size < mbToBytes(maxSize),
        type: fileType,
        maxSize
    };
};
