import {SET_SELECTED_PRODUCT, SET_MAIN_PHOTO} from '../constants';

const defaultState = {
    selectedProduct: null,
    mainPhoto: 0,
    smallPhotos: []
};

const addNoPhotoImages = (smallPhotos) => {
    while (smallPhotos.length < 3) {
        smallPhotos.push('https://react-bootstrap.github.io/thumbnail.png');
    }
    return smallPhotos;
};

const getSmallPhotos = (index, state) => {
    let copyState = {...state};
    const {smallPhotos} = copyState;
    for (var i = 0; i < 3; i++) {
        if (index === i) {
            smallPhotos[i] = copyState.mainPhoto;
        } else if (smallPhotos.length >= i) {
            smallPhotos[i] = smallPhotos[i];
        }  else {
            smallPhotos[i] = 'https://react-bootstrap.github.io/thumbnail.png';
        }
    }
    return copyState.smallPhotos;
};

const getSmallPhotosFromSelectedProduct = (payload) => {
    if (!payload) {
        return null;
    }
    const {photos} = payload;
    photos.splice(0,1);
    return addNoPhotoImages(photos);
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: payload,
                mainPhoto: payload  && payload.photos.length > 0 ? payload.photos[0] : null,
                smallPhotos: getSmallPhotosFromSelectedProduct(payload)
            };
        case SET_MAIN_PHOTO:
            return {
                ...state,
                mainPhoto: state.smallPhotos[payload],
                smallPhotos: getSmallPhotos(payload, state)
            };
    }

    return state;
};
