const slider9 = document.querySelector(".documentarybox");

var scrollPerClick;
var ImagePadding = 20;


showDocumentaryData();

var scrollAmount = 0;

function sliderScrollLeft9() {
  slider9.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight9() {
  if (scrollAmount <= slider9.scrollWidth - slider9.clientWidth) {
    slider9.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showDocumentaryData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=99"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider9.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider9-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}