const API_KEY = 'api_key=7136a65f97470f2b86c46406fe9bb192';
const BASE_URL = 'https://api.themoviedb.org/3';
const id = sessionStorage.getItem('movieId');
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const MOVIE_URL = BASE_URL + '/movie/' + id + '?' +
  API_KEY;
// + '&Language=en-US';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


const smain = document.getElementById('smain');

getMovie(MOVIE_URL);

function getMovie(url) {
  fetch(url).then(res => res.json()).then(data => {
    showMovie(data.results);
  })
}

function showMovie(data) {
  smain.innerHTML = '';
  //循环得到图片的信息
  data(movie => {
    //名字都是从console(data)里面看到的
    // 从api中取值，如何表示！！！！！！！！！！！！！！！！！！！
    const {
      title,
      poster_path,
      vote_average,
      genres,
      release_date,
      runtime,
      overview,
      tagline,
    } = movie;
    const movieEl = document.createElement('div'); //创建一个div,class为popularmovie
    movieEl.classList.add('single-contatiner');
    movieEl.innerHTML = `


    <div class="single-poster">
      <img src="${IMG_URL+poster_path}" alt="{title}">
    </div>

    <div class="single-info">

      <div class="single-title">
        {title}
      </div>
      <div class="single-detail">
        <div class="set">
          <label>Release Date</label>
          <span>{release_date}</span>
        </div>
        <div class="set">
          <label>Running Time</label>
          <span>{runtime}</span>
        </div>
        <div class="set">
          <label>Genre</label>
          <span>{genres.name}</span>
        </div>
      </div>

      <div class="single-description">
        {overview}
      </div>

      <div class="tagline">
        {tagline}
      </div>
    </div>

`

    smain.appendChild(movieEl);


    // openNav(movie);

  })
getMovieVideo(id);
}









function getMovieVideo(id) {

  fetch(BASE_URL + '/movie/' + id + '/videos?' + API_KEY).then(res => res.json()).then(videoData => {
    if (videoData) {
      // document.getElementById("myNav").style.width = "100%";
      if (videoData.results.length > 0) {
        var embed = [];
        videoData.results.forEach(video => {
          let {
            key,
            name,
            site,
          } = video


          // 实验！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
          if (site == 'YouTube') {
            embed.push(`


  <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


`)
            //实验！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
          }


        })





        document.getElementById('trailer').innerHTML = embed.join('');
      } else {
        overlayContent.innerHTML = `<h3 class="no-results">No Results Found</h3>`
      }
    }
  })

}
