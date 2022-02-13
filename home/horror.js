const slider14 = document.querySelector(".horrorbox");

var scrollPerClick;
var ImagePadding = 20;


showHorrorData();

var scrollAmount = 0;

function sliderScrollLeft14() {
  slider14.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight14() {
  if (scrollAmount <= slider14.scrollWidth - slider14.clientWidth) {
    slider14.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showHorrorData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=27"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider14.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider14-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}