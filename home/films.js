const slider3 = document.querySelector(".filmsbox");

var scrollPerClick;
var ImagePadding = 20;

showFilmData();

var scrollAmount = 0;

function sliderScrollLeft3() {
  slider3.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight3() {
  if (scrollAmount <= slider3.scrollWidth - slider3.clientWidth) {
    slider3.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showFilmData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&sort_by=revenue.desc"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider3.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider3-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}
