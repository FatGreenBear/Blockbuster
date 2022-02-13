const slider12 = document.querySelector(".fantasybox");

var scrollPerClick;
var ImagePadding = 20;


showFantasyData();

var scrollAmount = 0;

function sliderScrollLeft12() {
  slider12.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight12() {
  if (scrollAmount <= slider12.scrollWidth - slider12.clientWidth) {
    slider12.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showFantasyData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=14"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider12.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider12-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}