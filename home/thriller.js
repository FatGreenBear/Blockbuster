const slider19 = document.querySelector(".thrillerbox");

var scrollPerClick;
var ImagePadding = 20;


showThrillerData();

var scrollAmount = 0;

function sliderScrollLeft19() {
  slider19.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight19() {
  if (scrollAmount <= slider19.scrollWidth - slider19.clientWidth) {
    slider19.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showThrillerData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=53"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider19.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider19-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}