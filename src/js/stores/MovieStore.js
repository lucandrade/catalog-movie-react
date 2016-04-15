import { EventEmitter } from "events";
import querystring from "querystring";

import dispatcher from "../dispatcher";
import Axios from "../utils/axios";

class MovieStore extends EventEmitter {
  constructor() {
    super();
    this.search = [];
    this.director = null;
    this.movieInfo = null;
    this.lieft = [];
  }

  receiveDirector(director) {
    this.director = director;
    this.emit('changeDirector');
  }

  receiveSearch(data) {
    this.search = data;
    this.emit('changeSearch');
  }

  receiveMovieInfo(info) {
    this.movieInfo = info;
    this.emit('changeMovieInfo');
  }

  receiveList(list) {
    this.list = list;
    this.emit('changeList');
  }

  getDirector() {
    return this.director;
  }

  getSearch() {
    return this.search;
  }

  getMovieInfo() {
    return this.movieInfo;
  }

  getList() {
    return this.list;
  }

  searchDirector(movieId) {
    Axios.get('/rest/search/movie/' + movieId + '/director')
      .catch((response) => {
        if (response instanceof Error) {
          this.receiveDirector([]);
        }
      }).then((response) => {
        if (response) {
          response = response.data;
          if (response.status) {
            this.receiveDirector(response.data);
          }
        }
      });
  }

  searchMovie(query) {
    Axios.get('/rest/search/movie?query=' + query)
      .catch((response) => {
        if (response instanceof Error) {
          this.receiveSearch([]);
        }
      }).then((response) => {
        if (response) {
          response = response.data;
          if (response.status) {
            this.receiveSearch(response.data);
          }
        }
      });
  }

  sendMovie(data) {
    Axios.post('/rest/movie', querystring.stringify(data),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).catch((response) => {
      if (response instanceof Error) {
        this.receiveMovieInfo({});
      }
    }).then((response) => {
      if (response) {
        this.receiveMovieInfo(response.data);
      }
    });
  }

  listMovie() {
    Axios.get('/rest/movie')
      .catch((response) => {
        if (response instanceof Error) {
          this.receiveList([]);
        }
      }).then((response) => {
        if (response) {
          response = response.data;
          if (response.status) {
            this.receiveList(response.data);
          }
        }
      });
  }

  handleActions(action) {
    switch(action.type) {
      case 'LIST_MOVIE':
        this.emit('listing');
        this.listMovie();
        break;
      case 'SEARCH_MOVIE':
        this.emit('searching');
        this.searchMovie(action.query);
        break;
      case 'SEND_MOVIE':
        this.emit('sending');
        this.sendMovie(action.data);
        break;
      case 'SEARCH_DIRECTOR':
        this.emit('director_searching');
        this.searchDirector(action.movie_id);
        break;
    }
  }
}

const movieStore = new MovieStore;
dispatcher.register(movieStore.handleActions.bind(movieStore));

export default movieStore;