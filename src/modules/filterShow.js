import {
  getFilterShow, getLike, postLike,
} from './fetch.js';
import displayInfo from './displayInfo.js';

const displayFilterMovie = async (search) => {
  const filterContainer = document.querySelector('#filter');
  // fetching the filter shows from the API
  const filterArray = await getFilterShow(search);
  // fetching the likes from the API
  const allLikes = await getLike();
  // Clear the container
  filterContainer.innerHTML = '';
  // looping through the array
  filterArray.forEach((data) => {
    // filtering the like for the movie id
    const likes = allLikes.filter((like) => like.item_id === data.id);
    // creating a new div element
    const showCard = document.createElement('div');
    showCard.classList.add('container');
    showCard.innerHTML = `<img src="${data.show.image ? data.show.image.original : ''}" alt="${data.show.name} poster">
          <div class="caption">
            <span class="title">
              <p class="name">${data.show.name}</p>
              <p class="rating">
                <span class="imdb">IMDb</span>
                <span class="ratingNumber">${data.show.rating.average}/10</span>
                <button id="info${data.show.id}">Info<i class="fa-solid fa-plus"></i></button>
              </p>
            </span>
            <span class="subcaption">
              <i class="fa-regular fa-heart"></i>
              <span id="like">${likes.length > 0 ? likes[0].likes : 0}</span>
            </span>
          </div>
          `;
    filterContainer.appendChild(showCard);

    // posting likes on the home page
    const likeBtn = showCard.querySelector('.fa-heart');
    likeBtn.onclick = () => {
      likeBtn.style.color = '#8197a4';
      likeBtn.classList.remove('fa-regular');
      likeBtn.classList.add('fa-solid');
      postLike(data.id);
      const like = showCard.querySelector('#like');
      if (likes.length > 0) {
        like.innerHTML = `${likes[0].likes + 1}`;
      } else {
        like.innerHTML = '1';
      }
    };

    // counting movies
    const countMovie = document.querySelector('#counter');
    countMovie.innerHTML = `Total Number of Series: ${filterArray.length}`;

    // opening info popup page
    const infoBtn = document.getElementById(`info${data.show.id}`);
    infoBtn.onclick = () => {
      displayInfo(data.show.id);
    };
  });
};

export default displayFilterMovie;