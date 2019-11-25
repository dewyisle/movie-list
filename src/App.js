import React from 'react';
import axios from "axios";


/*
  1. 네트워크에 존재하는 데이터를 가져와서 const변수에 넣는다.
  ?? How ???
  : fetch - promise (x)
  : axios 
  2. const 변수를 View 시킨다.
*/

//아래는 외우셈
//componentDidMount();
//라이프사이클 : 리액트가 구동이 되는 순서
//컴포넌트(App)이 만들어진 후 -> 자동으로 실행하는 함수

//render() -> didMount();

const API_KEY = "9b26efc396233c48c0dcfd696ef37d4a";
const URL = "http://api.themoviedb.org/3/";
const param = {
  path: "movie/popular",
  lan: "en"
};

function App() {
  const axios = require("axios"); //네트워크에 있는 데이터를 불러오는 기능
  let movies = null;

  axios
    .get("http://api.themoviedb.org/3/movie/popular?api_key=9b26efc396233c48c0dcfd696ef37d4a&language=en-US&page=1")
    .then(function (response) {
      // handle success
      //console.log(response.data.results);
      movies = response.data.results; //영화20개
      console.log(movies);

      const movieList = document.getElementById("movieList");

      for(let i=0; i < movies.length; i++){
        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");

        console.log(movies[i].poster_path);

        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
        span.innerText = movies[i].title;
        li.appendChild(span);
        li.appendChild(img);

        movieList.appendChild(li);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

    //-> 자바스크립트
    // React Source -> map하나로 끝남

  /*
    map이 에러가 나는 이유
    - ES6 문법 => render (화면에 뿌려주는 것)
      babel이라는 기능이 필요. map은 실행이 되는데 화면에 뿌려줄 때 에러가 발생
  */
  //return movies.map(movie => <h1>movies.title</h1>);
  return <ul id="movieList"></ul>;
}

export default App;
