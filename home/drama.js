const slider10 = document.querySelector(".dramabox");

var scrollPerClick;
var ImagePadding = 20;


showDramaData();

var scrollAmount = 0;

function sliderScrollLeft10() {
  slider10.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight10() {
  if (scrollAmount <= slider10.scrollWidth - slider10.clientWidth) {
    slider10.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showDramaData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=18"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider10.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider10-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}