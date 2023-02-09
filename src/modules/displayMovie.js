import {
  getMovie, getLike, postLike,
} from './fetch.js';

const displayMovie = async () => {
  const home = document.querySelector('#home');
  // fetching the likes from the API
  const allLikes = await getLike();
  // fetching the movies from the API
  const dataArray = await getMovie();
  // looping through the array
  dataArray.forEach((data, index) => {
    // filtering the like for the movie id
    const likes = allLikes.filter((like) => like.item_id === data.id);
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

    // posting likes on the home page
    const likeBtn = dataCard.querySelector('.fa-heart');
    likeBtn.onclick = () => {
      const like = dataCard.querySelector('#like');
      postLike(data.id);
      like.innerHTML = `${likes[0].likes + 1} Likes`;
    };
  });
};

export default displayMovie;