// Replace API_KEY with your api key from omdb api.
const API_KEY = "API KEY";

$(function () {
  let debounceTimeout = null;
  $("#searchInput").on("input", function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500);
  });

  $("#showMore").on("click", function (e) {
    e.preventDefault();
    onShowMoreClicked();
  });
});

function getMovie(title) {
  if (!title) {
    return;
  }

  onBeforeSend();
  fetchMovieFromApi(title);
}

async function fetchMovieFromApi(title) {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        t: title,
        apikey: API_KEY,
      },
    });
    handleResults(response.data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

function handleResults(result) {
  if (result.Response === "True") {
    render(result);
    hideComponent("#waiting");
  } else if (result.Response === "False") {
    hideComponent("#waiting");
    showComponent("#notFound");
  }
}

function onBeforeSend() {
  showComponent("#waiting");
  hideComponent("#movie");
  hideComponent("#notFound");
  hideComponent("#error");
}

function onApiError() {
  hideComponent("#waiting");
  showComponent("#error");
}

function onShowMoreClicked() {
  $(".extended").slideToggle(1000);
}

function showComponent(jQueryComponent) {
  return $(jQueryComponent).removeClass("hidden");
}

function hideComponent(jQueryComponent) {
  return $(jQueryComponent).addClass("hidden");
}

function render(data) {
  // Construct IMDb URL
  const imdbUrl = `https://www.imdb.com/title/${data.imdbID}`;

  // Set the IMDb link
  const imdbLink = $("#imdbId").attr("href", imdbUrl);

  // Update other movie details
  document.getElementById("title").textContent = data.Title;
  document.getElementById("year").textContent = `Έτος παραγωγής: ${data.Year}`;
  document.getElementById("runtime").textContent = `Διάρκεια: ${data.Runtime}`;
  document.getElementById("genre").textContent = `Είδος: ${data.Genre}`;
  document.getElementById("imdbRating").textContent = data.imdbRating;
  document.getElementById("plot").textContent = data.Plot;
  $("#director").find("span").html(data.Director);
  $("#actors").find("span").html(data.Actors);
  $("#production").find("span").html(data.Production);
  $("#boxOffice").find("span").html(data.BoxOffice);
  $("#language").find("span").html(data.Language);
  $("#rated").find("span").html(data.Rated);

  // Set the movie poster
  const poster = $("#image");
  poster.attr("src", data.Poster);
  poster.attr("alt", data.Title);

  // Show the movie section
  $("#movie").removeClass("hidden");
  // hideComponent('#waiting')
}
