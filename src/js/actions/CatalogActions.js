import dispatcher from "../dispatcher";

export function listGenres() {
  dispatcher.dispatch({
    type: "LIST_GENRES"
  });
}

export function setPage(page) {
  dispatcher.dispatch({
    type: "CHANGE_PAGE",
    page: page
  });
}

export function searchMovie(query) {
  dispatcher.dispatch({
    type: "SEARCH_MOVIE",
    query: query
  });
}

export function sendMovie(movie) {
  dispatcher.dispatch({
    type: "SEND_MOVIE",
    data: movie
  });
}

export function searchMovieDirector(movieId) {
  dispatcher.dispatch({
    type: "SEARCH_DIRECTOR",
    movie_id: movieId
  });
}

export function openSnack(message, duration, onClose) {
  if (!onClose) {
    onClose = () => {};
  }
  if (!duration) {
    duration = 4000;
  }
  dispatcher.dispatch({
    type: "SHOW_SNACKBAR",
    snackbar: {
      message: message,
      open: true,
      duration: duration,
      onClose: onClose
    }
  });
}

export function openSnackWithDuration(message, duration) {
  dispatcher.dispatch({
    type: "SHOW_SNACKBAR",
    snackbar: {
      message: message,
      open: true,
      duration: duration
    }
  });
}

export function listMovies() {
  dispatcher.dispatch({
    type: "LIST_MOVIE"
  });
}