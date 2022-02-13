const slider17 = document.querySelector(".romancebox");

var scrollPerClick;
var ImagePadding = 20;


showRomanceData();

var scrollAmount = 0;

function sliderScrollLeft17() {
  slider17.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight17() {
  if (scrollAmount <= slider17.scrollWidth - slider17.clientWidth) {
    slider17.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showRomanceData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=10749"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider17.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider17-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}