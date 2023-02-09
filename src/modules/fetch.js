import { baseUrl, involvementUrl } from './api.js';

const getMovie = async () => {
  const response = await fetch(baseUrl);
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

export {
    getMovie, getLike, postLike,
};