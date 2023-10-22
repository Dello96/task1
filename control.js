const movieCards = document.querySelector(".movie-cards");

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZiMjU5MmNhZDYwYjczNDE5ZGE5ZTAzNTUyMzc3YyIsInN1YiI6IjY1MmY4ZGZjYzk5NWVlMDBlM2Y2YWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpBfTU-By6gAfRKlCi9cXE4PMVwy8KjOBVdHtjeduuQ",
    },
};

function addMovie(movie) {
    const base_url = "https://image.tmdb.org/";
    const file_size = "t/p/w500";
    const file_path = movie.poster_path;
    const div = document.createElement("div");
    div.classList.add("movie-card");

    div.innerHTML = `<div class="movie-card__poster">
  <img src=${base_url}${file_size}${file_path} /></div>
<div class="movie-cardContents">
  <div class="movie-cardTitle">${movie.title}</div>
  <div class="movie-cardOverview">${movie.overview}</div>
  <div class="movie-cardAverage">Ratings : ${movie.vote_average}</div>
</div>`;
    div.id = movie.id;
    div.addEventListener("click", () => alert(`Movie id is: ${movie.id}`));
    movieCards.append(div);
}


fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
)
    .then((response) => response.json())
    .then((response) => {
        const result = response.results;
        result.forEach((movie) => {
            addMovie(movie);
        });
    })
    .catch((err) => console.error(err));


function searchingMovie () {
    const 
}