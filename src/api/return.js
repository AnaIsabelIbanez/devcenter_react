import Api from '../utils/api';

const api = new Api();
const baseUri = '/return';

export const getReturn = (returnId) => api.get(`${baseUri}/${returnId}`);

export const getLine = (lineId) => api.get(`${baseUri}/line/${lineId}`);

export const deletePhoto = (photoId) => api.delete(`${baseUri}/line/photo/${photoId}`);

export const addPhoto = ({file, lineId}) => api.uploadFiles(`${baseUri}/line/${lineId}/photo`, file);
