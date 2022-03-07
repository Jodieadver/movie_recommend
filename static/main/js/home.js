// TMDB api实现home.html的popularmovie

const API_KEY = 'api_key=7136a65f97470f2b86c46406fe9bb192';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +
  API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(API_URL);
//用这个api得到一些数据，从console里面可以看到我们只需要results那部分
function getMovies(url) {

  fetch(url).then(res => res.json()).then(data => {
    showMovies(data.results);
  })
}

function showMovies(data) {
  main.innerHTML = '';
  //循环得到图片的信息
  data.forEach(movie => {
    //名字都是从console(data)里面看到的
    const {
      title,
      poster_path,
      vote_average,
      overview
    } = movie;
    const movieEl = document.createElement('div'); //创建一个div,class为popularmovie
    movieEl.classList.add('popularmovie');
    movieEl.innerHTML = `
      <img src="${IMG_URL+poster_path}" alt="${title}">

      <div class="movie-info">
        <h4>${title}</h4>
        <span class="${getColor(vote_average)}">${vote_average}</span>
      </div>

      <div class="overview">
      <h4>overview</h4>
      ${overview}
      </div>
      `

    main.appendChild(movieEl);
  })
}


function getColor(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}
