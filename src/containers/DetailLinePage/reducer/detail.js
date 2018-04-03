import {DELETE_PHOTO, SET_DETAIL_LINE} from '../constants';

const defaultState = {
    detail: {}
};
const deletePhoto = (idPhoto, state) => {
    return state.detail.photos.filter((photo) => photo.id !== idPhoto);
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_DETAIL_LINE:
            return {
                ...state,
                detail: payload.data.attributes
            };
        case DELETE_PHOTO:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    photos: deletePhoto(payload, state)
                }
            };
    }

    return state;
};
