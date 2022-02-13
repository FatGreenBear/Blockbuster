const slider21 = document.querySelector(".westernbox");

var scrollPerClick;
var ImagePadding = 20;


showWesternData();

var scrollAmount = 0;

function sliderScrollLeft21() {
  slider21.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight21() {
  if (scrollAmount <= slider21.scrollWidth - slider21.clientWidth) {
    slider21.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showWesternData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=37"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider21.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider21-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}