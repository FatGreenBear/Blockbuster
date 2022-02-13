const slider15 = document.querySelector(".musicbox");

var scrollPerClick;
var ImagePadding = 20;


showMusicData();

var scrollAmount = 0;

function sliderScrollLeft15() {
  slider15.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight15() {
  if (scrollAmount <= slider15.scrollWidth - slider15.clientWidth) {
    slider15.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showMusicData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=10402"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider15.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider15-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}