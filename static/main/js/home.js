// TMDB api实现home.html的popularmovie

var id = null;
const API_KEY = 'api_key=7136a65f97470f2b86c46406fe9bb192';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +
  API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;




const main = document.getElementById('main');
// 添加搜索功能（两行）
const form = document.getElementById('form');
const search = document.getElementById('search');


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
      overview,
      id
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
      ${overview}  <br/>
      <button class="know-more" id="${id}">Know More</button>
      </div>

      `

    main.appendChild(movieEl);

    document.getElementById(id).addEventListener('click',() =>{
      todetail(id);

    })


  })
}


function todetail(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'detail';
  return false;
}



// 调用api得到打分，根据打分不同显示不同颜色
function getColor(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}


// 也可以用jquery写，form是id名字，$('form').submit(function{...})  我觉得是，有待考证
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm){
    document.getElementById('titlename').innerHTML="Selected Movie";
    getMovies(searchURL + '&query=' + searchTerm);
  }else{
    document.getElementById('titlename').innerHTML="Popular Movie Recently";
    getMovies(API_URL);
  }
})
