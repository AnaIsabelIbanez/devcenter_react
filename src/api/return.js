import Api from '../utils/api';

const api = new Api();
const baseUri = '/return';

export const getReturn = (id) => api.get(`${baseUri}/${id}`);
