const API_KEY = 'api_key=7136a65f97470f2b86c46406fe9bb192';
const BASE_URL = 'https://api.themoviedb.org/3';
var id = sessionStorage.getItem('movieId');

// https://api.themoviedb.org/3/movie/458576?api_key=7136a65f97470f2b86c46406fe9bb192
const MOVIE_URL = BASE_URL + '/movie/' + id + '?' + API_KEY + '&append_to_response=videos';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

var userid = sessionStorage.getItem('userid');
console.log(userid)


getDetail(MOVIE_URL);

function getDetail(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      showDetail(data);
    })
  // .then(data => console.log(data))
}


const main = document.getElementById('main');
const tcontainer = document.getElementById('tcontainer');

function showDetail(data) {
    console.log(data.id);

  main.innerHTML = '';


  // title/,poster_path/,vote_average/,genres,
  //  runtime/, overview/, tagline/,release_date/
  const runtime = data.runtime;
  const title = data.title;
  const release_date = data.release_date;
  const tagline = data.tagline;
  const poster_path = data.poster_path;
  const vote_average = data.vote_average;
  const overview = data.overview;
  //电影类型
  var genres = [];
  Object.keys(data.genres).forEach(name => {
    var genre = data.genres[name].name;
    genres.push(genre);
    // console.log(data.genres[name].name)
  })
  genres = genres.join('/');

  // 修改电影信息的html
  const movieEl = document.createElement('div'); //创建一个div,class为popularmovie
  movieEl.classList.add('single-contatiner');
  movieEl.innerHTML = `

     <div class="single-poster">
       <img src="${IMG_URL+poster_path}" alt="{title}">
     </div>

    <div class="single-info">

       <div class="single-title">

         ${title}    <span>(${data.id})</span>

       </div>
       <div class="single-detail">
         <div class="set">
           <label>Release Date:</label>
           <span>${release_date}</span>
         </div>
         <div class="set">
           <label>Running Time:</label>
           <span>${runtime} min</span>
         </div>
         <div class="set">
           <label>Genre:</label>
           <span>${genres}</span>
         </div>
       </div>

       <div class="single-description">
         <div class="sdtx">
           ${overview}
         </div>
       </div>

       <div class="tagline">
        ${tagline}
      </div>



      </div>



 `
  main.appendChild(movieEl);

// 修改评分星星的html
// const movieScore = document.createElement('div'); //创建一个div,class为popularmovie
// movieScore.classList.add('score');
// if(userid!=null){
// movieScore.innerHTML = `
//
//   <!-- <input type="text" name="score" placeholder="what can it get?"> -->
//   <form method="post">
//     {% csrf_token %}
//     <input type="text" name="dddd" value="ddddd">
//       {{form.rating}}
//     </form>
//     <!-- <input type="text" name="score" placeholder="what can it get?"> -->
//     <button class="isubmit" type="button" name="button">submit</button>
//     `
//
// }else{
//   movieScore.innerHTML = `
//   <div class="alert">
//     <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
//     Sorry, you can only rate films when authenticated. (That's not what I said.)
//   </div>
//   `
// }
//  main.appendChild(movieScore);
//
// <!-- <input type="text" name="" value="">
// <button type="button" name="button">submit</button> -->
//

// main.appendChild(movieScore);








  // 加上视频数据,在youtube上面的全部加进来，如果有很多都放在videos中，但只要第一个视频，得到video_key
  var videos = [];
  Object.keys(data.videos.results).forEach(i => {
    const vsite = data.videos.results[i].site;
    if (vsite == 'YouTube') {
      var video = data.videos.results[i].key;
      videos.push(video);
    }
  })
  let video_key = null;
  if (videos.length > 0) {
    video_key = videos[0];
  }

  // 修改视频html，首先置空，然后
  tcontainer.innerHTML='';
  tcontainer.innerHTML = `


  <div id="trailer" class="trailer">
  <iframe padding-top="100px" width="560" height="315" src="https://www.youtube.com/embed/${video_key}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

`

}




//
// scoreform.addEventListener('submit', (e) => {
//   e.preventDefault();
//
//   $.ajax({
//     type: 'POST',
//     url: '/rates/detail',
//     data:{
//       movie_id : 1,
//       user : 1,
//       csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
//
//     },
//     success: function(){
//       alert("yeah")
//     }
//   });
//
// })





// const smain = document.getElementById('smain');

// getMovie(MOVIE_URL);
//
// function getMovie(url) {
//   fetch(url).then(res => res.json()).then(data => {
//     console.log(data.results)
//     showMovie(data.results);
//   })
// }
//
// function showMovie(data) {
//   smain.innerHTML = '';
//
//
// }

//循环得到图片的信息
// movie => {
//   //名字都是从console(data)里面看到的
//   // 从api中取值，如何表示！！！！！！！！！！！！！！！！！！！
//     const {
//       title,
//       poster_path,
//       vote_average,
//       genres,
//       release_date,
//       runtime,
//       overview,
//       tagline,
//     } = movie;
//     const movieEl = document.createElement('div'); //创建一个div,class为popularmovie
//     movieEl.classList.add('single-contatiner');
//     movieEl.innerHTML = `
//
//
//     <div class="single-poster">
//       <img src="${IMG_URL+poster_path}" alt="{title}">
//     </div>
//
//     <div class="single-info">
//
//       <div class="single-title">
//         {title}
//       </div>
//       <div class="single-detail">
//         <div class="set">
//           <label>Release Date</label>
//           <span>{release_date}</span>
//         </div>
//         <div class="set">
//           <label>Running Time</label>
//           <span>{runtime}</span>
//         </div>
//         <div class="set">
//           <label>Genre</label>
//           <span>{genres.name}</span>
//         </div>
//       </div>
//
//       <div class="single-description">
//         {overview}
//       </div>
//
//       <div class="tagline">
//         {tagline}
//       </div>
//     </div>
//
// `
//
//     smain.appendChild(movieEl);
//
//
//     // openNav(movie);
//
//   }
// getMovieVideo(id);
// }


//
//
//
// function getMovieVideo(id) {
//
//   fetch(BASE_URL + '/movie/' + id + '/videos?' + API_KEY).then(res => res.json()).then(videoData => {
//     if (videoData) {
//       // document.getElementById("myNav").style.width = "100%";
//       if (videoData.results.length > 0) {
//         var embed = [];
//         videoData.results.forEach(video => {
//           let {
//             key,
//             name,
//             site,
//           } = video
//
//
//           // 实验！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
//           if (site == 'YouTube') {
//             embed.push(`
//
//
//   <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//
//
// `)
//             //实验！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
//           }
//
//
//         })
//
//
//
//
//
//         document.getElementById('trailer').innerHTML = embed.join('');
//       } else {
//         overlayContent.innerHTML = `<h3 class="no-results">No Results Found</h3>`
//       }
//     }
//   })
// }
