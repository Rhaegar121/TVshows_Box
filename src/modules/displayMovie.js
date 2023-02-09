import {
  getMovie, getLike, postLike,
} from './fetch.js';
import movieCount from './movieCounter.js';

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
    dataCard.innerHTML = `<img src="${data.image.original}" alt="${data.name}">
      <div class="caption">
        <span class="title">
          <p class="name">${data.name}</p>
          <p class="rating">
            <span class="imdb">IMDb</span>
            <span class="ratingNumber">${data.rating.average}</span>
            <button id="film${index}">show-info</button>
          </p>
        </span>
        <span class="sub-title">
          <i class="fa-regular fa-heart"></i>
          <span id="like">${likes.length > 0 ? likes[0].likes : 0}</span>
        </span>
      </div>
      `;
    home.appendChild(dataCard);

    // posting likes on the home page
    const likeBtn = dataCard.querySelector('.fa-heart');
    likeBtn.onclick = () => {
      likeBtn.style.color = '#8197a4';
      likeBtn.classList.remove('fa-regular');
      likeBtn.classList.add('fa-solid');
      postLike(data.id);
      const like = dataCard.querySelector('#like');
      if (likes.length > 0) {
        like.innerHTML = `${likes[0].likes + 1}`;
      } else {
        like.innerHTML = '1';
      }
    };

    // counting movies
    const countMovie = document.querySelector('#counter');
    countMovie.innerHTML = `Total Number of Series: ${movieCount()}`;
  });
};

export default displayMovie;