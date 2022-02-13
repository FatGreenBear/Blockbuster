const slider13 = document.querySelector(".historybox");

var scrollPerClick;
var ImagePadding = 20;


showHistoryData();

var scrollAmount = 0;

function sliderScrollLeft13() {
  slider13.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight13() {
  if (scrollAmount <= slider13.scrollWidth - slider13.clientWidth) {
    slider13.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showHistoryData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=36"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider13.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider13-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}