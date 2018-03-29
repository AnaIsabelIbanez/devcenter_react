import {SET_SELECTED_PRODUCT, SET_MAIN_PHOTO} from '../constants';

const defaultState = {
    selectedProduct: null,
    mainPhoto: 0,
    smallPhotos: []
};

const getSmallPhotos = (index, state) => {
    let copyState = {...state};
    copyState.smallPhotos.splice(index, 1);
    copyState.smallPhotos.push(copyState.mainPhoto);
    return copyState.smallPhotos;
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: payload,
                mainPhoto: payload && payload.photos.length > 0 ? payload.photos[0] : null,
                smallPhotos: payload && payload.photos.splice(0,1)
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
