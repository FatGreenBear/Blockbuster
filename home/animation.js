const slider6 = document.querySelector(".animationbox");

var scrollPerClick;
var ImagePadding = 20;


showAnimationData();

var scrollAmount = 0;

function sliderScrollLeft6() {
  slider6.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight6() {
  if (scrollAmount <= slider6.scrollWidth - slider6.clientWidth) {
    slider6.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showAnimationData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=16"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider6.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider6-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}