const slider7 = document.querySelector(".comedybox");

var scrollPerClick;
var ImagePadding = 20;


showComedyData();

var scrollAmount = 0;

function sliderScrollLeft7() {
  slider7.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight7() {
  if (scrollAmount <= slider7.scrollWidth - slider7.clientWidth) {
    slider7.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showComedyData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=35"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider7.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider7-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}