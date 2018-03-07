import Api from '../utils/api';

const api = new Api();

export const getGenericResource = (queryParams = '') => {
    return api.get(`${queryParams}`);
};
