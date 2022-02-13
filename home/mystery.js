const slider16 = document.querySelector(".mysterybox");

var scrollPerClick;
var ImagePadding = 20;


showMysteryData();

var scrollAmount = 0;

function sliderScrollLeft16() {
  slider16.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight16() {
  if (scrollAmount <= slider16.scrollWidth - slider16.clientWidth) {
    slider16.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showMysteryData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=9648"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider16.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider16-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}