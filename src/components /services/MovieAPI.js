const BASE_URL = "https://api.themoviedb.org/3";
const BASE_KEY = "d1f189301a26d9afb286d4403cc9e763";

async function fetchWithErrorHandling(url = "", config = {}) {
 const response = await fetch(url, config);
 return response.ok
  ? await response.json()
  : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
 return fetchWithErrorHandling(
  `${BASE_URL}/trending/movie/day?api_key=${BASE_KEY}`
 );
}
// List of trending movies on HomePage

export function fetchMovieDetails(movieId) {
 return fetchWithErrorHandling(
  `${BASE_URL}/movie/${movieId}?api_key=${BASE_KEY}`
 );
}
// Movie Details by click

export function fetchMovieByKeyWord(movie) {
 return fetchWithErrorHandling(
  `${BASE_URL}/search/movie?api_key=${BASE_KEY}&query=${movie}`
 );
}
// Search Movie by name in MoviesPage

export function fetchMovieCredits(movieId) {
 return fetchWithErrorHandling(
  `${BASE_URL}/movie/${movieId}/credits?api_key=${BASE_KEY}`
 );
}
// Casts on movie's page

export function fetchMovieReviews(movieId) {
 return fetchWithErrorHandling(
  `${BASE_URL}/movie/${movieId}/reviews?api_key=${BASE_KEY}`
 );
}
// Reviews on movie's page
