import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import Axios from "../utils/axios";

class GenreStore extends EventEmitter {
  constructor() {
    super();
    this.genres = [];
  }

  receiveGenres(genres) {
    this.genres = genres;
    this.emit('change');
  }

  getAll() {
    return this.genres;
  }

  handleActions(action) {
    switch(action.type) {
      case 'LIST_GENRES': {
        this.emit('loading');
        Axios.get('/rest/genre').catch((response) => {
          if (response instanceof Error) {
            console.log('deu ruim');
          }
        }).then((response) => {
          if (response.data) {
            response = response.data;
            if (response.status) {
              this.receiveGenres(response.data);
            }
          }
        });
      }
    }
  }
}

const genreStore = new GenreStore;
dispatcher.register(genreStore.handleActions.bind(genreStore));

export default genreStore;