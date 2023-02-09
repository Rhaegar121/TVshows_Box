import {
    getData, getLike, getMovie, pushLike, pushComment,
  } from './util.js';
  
  const displayData = async () => {
    const home = document.querySelector('#home');
    // fetching the movie data from the API
    const dataArray = await getData();
  
    // looping through the array
    dataArray.forEach((data, index) => {
      // creating a new div element
      const dataCard = document.createElement('div');
      dataCard.classList.add('container');
      dataCard.innerHTML = `<img src="${data.image.medium}" alt="${data.name}">
      <div class="caption">
      <span class="title">${data.name}</span>
      <i class="fa-regular fa-heart"></i>
      </div>
      <p id="like">${likes.length > 0 ? likes[0].likes : 0} Likes</p>
      <button id="film${index}">Comments</button>
      <button>Reservations</button>`;
      home.appendChild(dataCard);
    });
  };
  
  export default displayData;