const slider2 = document.querySelector(".seriesbox");

var scrollPerClick;
var ImagePadding = 20;

showSeriesData();

var scrollAmount = 0;

function sliderScrollLeft2() {
  slider2.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight2() {
  if (scrollAmount <= slider2.scrollWidth - slider2.clientWidth) {
    slider2.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showSeriesData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=" +
      api_key +
      "&sort_by=popularity.desc"
  );

  result = result.data.results;

  result.map(function (cur, index) {
      slider2.insertAdjacentHTML(
        "beforeend",
        `<img class="img-${index} slider2-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
      );
    });

  scrollPerClick = 400;
}

