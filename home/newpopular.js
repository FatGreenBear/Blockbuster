const slider = document.querySelector(".newpopularbox");

var scrollPerClick;
var ImagePadding = 20;

showMovieData();

var scrollAmount = 0;

function sliderScrollLeft() {
  slider.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
    slider.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showMovieData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&sort_by=popularity.desc"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}


