const slider4 = document.querySelector(".actionbox");

var scrollPerClick;
var ImagePadding = 20;


showActionData();

var scrollAmount = 0;

function sliderScrollLeft4() {
  slider4.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight4() {
  if (scrollAmount <= slider4.scrollWidth - slider4.clientWidth) {
    slider4.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showActionData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=28"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider4.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider4-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}