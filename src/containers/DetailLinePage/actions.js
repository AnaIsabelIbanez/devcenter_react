import {GET_INITIAL_DATA_DETAIL_LINE, SET_DETAIL_LINE, FETCH_DELETE_PHOTO, DELETE_PHOTO, UPLOAD_PHOTO, ADD_PHOTO} from './constants';

export const getInitialData = (id) =>  ({
    type: GET_INITIAL_DATA_DETAIL_LINE,
    payload: id
});

export const setDetailLine = (detailLine) => ({
    type: SET_DETAIL_LINE,
    payload: detailLine
});

export const fetchDeletePhoto = (idPhoto) => ({
    type: FETCH_DELETE_PHOTO,
    idPhoto
});

export const deletePhoto = (photoId) => ({
    type: DELETE_PHOTO,
    payload: photoId
});

export const uploadPhoto = (file, lineId) => {
    return ({
        type: UPLOAD_PHOTO,
        file,
        lineId
    });};

export const addPhoto = (file) => {
    return ({
        type: ADD_PHOTO,
        payload: file
    });};
