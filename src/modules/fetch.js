import { baseUrl, filterUrl, involvementUrl } from './api.js';

const getShow = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getFilterShow = async (search) => {
  const response = await fetch(`${filterUrl}${search}`);
  const data = await response.json();
  return data;
};

const getLike = async () => {
  const response = await fetch(`${involvementUrl}likes`);
  const data = await response.json();
  return data;
};

const postLike = async (id) => {
  await fetch(`${involvementUrl}likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const getOneShow = async (id) => {
  const showUrl = `${baseUrl}/${id}`;
  const response = await fetch(showUrl);
  const data = await response.json();
  return data;
};

const getComment = async (id) => {
  const response = await fetch(`${involvementUrl}comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

const postComment = async (id, username, comment) => {
  await fetch(`${involvementUrl}comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

export {
  getShow, getFilterShow, getLike, postLike, getOneShow, getComment, postComment,
};