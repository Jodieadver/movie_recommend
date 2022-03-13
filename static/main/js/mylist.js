
var all_rates =JSON.parse('{{all_rates|safe}}')
console.log(all_rates[0].fields.movie_id)
// var rates = JSON.parse('{{all_rates|safe}}')
// console.log(rates.movie_id)


// const MOVIE_URL = BASE_URL + '/movie/' + id + '?' + API_KEY + '&append_to_response=videos';
//
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//
// getPic(MOVIE_URL);
//
// function getPic(url) {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       showPic(data);
//     })
//   // .then(data => console.log(data))
// }
//
// const myList = document.getElementById('myList');
// const picTitle = document.getElementById('picTitle');
// const picCon = document.getElementById('picCon');
// function showPic(data){
//   myList.innerHTML = ''
//   const poster_path = data.poster_path;
//
//   const movieEl = document.createElement('div'); //创建一个div,class为popularmovie
//   movieEl.classList.add('container');
//   movieEl.innerHTML = `
//   <div class="title">
//     <h1>My Current Brain</h1>
//   </div>
//   `
//   myList.appendChild(movieEl);
//
//   const movieEl2 = document.createElement('div'); //创建一个div,class为popularmovie
//   movieEl.classList.add('content');
//   movieEl.innerHTML = `
//
//   <div class="one-poster">
//     <img src=${IMG_URL+poster_path} alt="poster_path">
//   </div>
//
//   `
//   myList.appendChild(movieEl2);
//
//
//
//
// }
