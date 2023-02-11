import { getOneShow } from './fetch.js';

const displayInfo = async (id) => {
  const info = document.querySelector('#info');
  info.style.display = 'block';
  // fetching particular show from the API
  const show = await getOneShow(id);
  // creating a new div element
  const infoCard = document.createElement('div');
  infoCard.classList.add('info-container');
  infoCard.innerHTML = `
        <i class="fa-solid fa-xmark" id="close${id}"></i>
        <div class="info-card">
            <div class="info-img">
                <img src="${show.image.medium}" alt="${show.name}">
            </div>
            <div class="info-text">
                <title>${show.name}</title>
                <div class="subtitle">
                    <span class="rating-info"><span class="imdb">IMDb</span>${show.rating.average}</span>
                    <span class="genre">${show.genres[0]}, ${show.genres[1]}, ${show.genres[2]}</span>
                </div>
                <p><span>Summary:</span><br>${show.summary}</p>
                <p><span>Premiered:</span>${show.premiered}</p>
                <p><span>Status:</span>${show.status}</p>
                <p><span>Air on:</span>${show.schedule.days}(${show.schedule.time})</p>
                <p><span>Language:</span>${show.language}</p>
                <p><span>Original Network:</span>${show.network.name}</p>
                <a href="${show.officialSite}">Visit the official site</a>
            </div>
        </div>`;
  info.appendChild(infoCard);

  // closing info popup
  const closeBtn = document.querySelector(`#close${id}`);
  closeBtn.onclick = () => {
    info.style.display = 'none';
    // removing the previous infoCard
    infoCard.innerHTML = '';
  };
};

export default displayInfo;
