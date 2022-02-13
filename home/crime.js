const slider8 = document.querySelector(".crimebox");

var scrollPerClick;
var ImagePadding = 20;


showCrimeData();

var scrollAmount = 0;

function sliderScrollLeft8() {
  slider8.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight8() {
  if (scrollAmount <= slider8.scrollWidth - slider8.clientWidth) {
    slider8.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showCrimeData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=80"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider8.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider8-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}