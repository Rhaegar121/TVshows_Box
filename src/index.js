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

  // showing home page
  homeBtn.onclick = () => {
    home.style.display = 'grid';
    contact.style.display = 'none';
    counter.style.display = 'block';
  };

  // showing contact page
  contactBtn.onclick = () => {
    contact.style.display = 'block';
    home.style.display = 'none';
    counter.style.display = 'none';
  };

  // mobile menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('#link');
  const menuToggle = () => {
    hamburger.classList.toggle('open');
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'flex';
    }
  };

  hamburger.onclick = () => {
    menuToggle();
  };
};