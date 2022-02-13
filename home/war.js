const slider20 = document.querySelector(".warbox");

var scrollPerClick;
var ImagePadding = 20;


showWarData();

var scrollAmount = 0;

function sliderScrollLeft20() {
  slider20.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight20() {
  if (scrollAmount <= slider20.scrollWidth - slider20.clientWidth) {
    slider20.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showWarData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=10752"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider20.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider20-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}