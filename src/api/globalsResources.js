import Api from '../utils/api';

const api = new Api();

export const getBrands = () => {
    return api.get('/brand');
};

export const getCategories = () => {
    return api.get('/category');
};

export const getSizes = () => {
    return api.get('/size');
};

export const getColors = () => {
    return api.get('/color');
};

export const getReturnTypes = () => {
    return api.get('/return_type');
};

export const getReturnReasons = () => {
    return api.get('/return_reason');
};

export const getWarehouseNames = () => {
    return api.get('/warehouse_name');
};

export const getReturnSubreasons = () => {
    return api.get('/return_subreason');
};
