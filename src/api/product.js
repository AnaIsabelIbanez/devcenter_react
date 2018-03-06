import Api from '../utils/api';

const api = new Api();
const baseUri = '/product';

export const getProducts = (queryParams = '') => {
    return api.get(`${baseUri}${queryParams}`);
};
