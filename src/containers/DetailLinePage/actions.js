import {GET_INITIAL_DATA_DETAIL_LINE, SET_DETAIL_LINE, FETCH_DELETE_PHOTO, DELETE_PHOTO, UPLOAD_PHOTO} from './constants';

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

export const deletePhoto = (photo) => ({
    type: DELETE_PHOTO,
    payload: photo
});

export const uploadPhoto = (file, lineId) => {
    console.log('lineId', lineId);
    return ({
        type: UPLOAD_PHOTO,
        file,
        lineId
    });};
