import { baseUrl, involvementUrl } from './api.js';

const getMovie = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

export {
    getMovie,
};