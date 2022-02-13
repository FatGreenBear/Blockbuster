const slider11 = document.querySelector(".familybox");

var scrollPerClick;
var ImagePadding = 20;


showFamilyData();

var scrollAmount = 0;

function sliderScrollLeft11() {
  slider11.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight11() {
  if (scrollAmount <= slider11.scrollWidth - slider11.clientWidth) {
    slider11.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showFamilyData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=10751"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider11.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider11-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}