const movieCount = () => {
  const home = document.querySelector('#home');
  const count = home.querySelectorAll('.container');
  return count.length;
};

export default movieCount;