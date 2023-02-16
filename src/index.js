import './style.css';
import displayData from './modules/displayMovie.js';

window.onload = () => {
  // display home page
  displayData();

  // changing pages
  const contactBtn = document.querySelector('#contactBtn');
  const homeBtn = document.querySelector('#homeBtn');
  const contact = document.querySelector('#contact');
  const home = document.querySelector('#home');
  const counter = document.querySelector('#counter');
  
  homeBtn.onclick = () => {
    home.style.display = 'grid';
    contact.style.display = 'none';
    counter.style.display = 'block';
  }

  contactBtn.onclick = () => {
    contact.style.display = 'block';
    home.style.display = 'none';
    counter.style.display = 'none';
  }
};