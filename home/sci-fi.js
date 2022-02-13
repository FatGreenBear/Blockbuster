const slider18 = document.querySelector(".sci-fibox");

var scrollPerClick;
var ImagePadding = 20;


showScifiData();

var scrollAmount = 0;

function sliderScrollLeft18() {
  slider18.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight18() {
  if (scrollAmount <= slider18.scrollWidth - slider18.clientWidth) {
    slider18.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showScifiData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=878"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider18.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider18-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}