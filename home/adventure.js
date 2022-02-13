const slider5 = document.querySelector(".adventurebox");

var scrollPerClick;
var ImagePadding = 20;


showAdventureData();

var scrollAmount = 0;

function sliderScrollLeft5() {
  slider5.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight5() {
  if (scrollAmount <= slider5.scrollWidth - slider5.clientWidth) {
    slider5.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    });
  }
}

async function showAdventureData() {
  const api_key = "77f507f39af62628cbad81ecb23e3d23";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&with_genres=12"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider5.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider5-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 400;
}