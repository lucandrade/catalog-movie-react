import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

import SearchDialog from './newmovie/SearchDialog';
import Form from './newmovie/Form';
import MovieStore from '../../stores/MovieStore';
import AppStore from '../../stores/AppStore';
import * as CatalogActions from '../../actions/CatalogActions';
import * as CatalogFunctions from '../../utils/CatalogFunctions';

export default class NewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.getSearch = this.getSearch.bind(this);
    this.getDirector = this.getDirector.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.state = {
      searchOpened: false,
      textSearch: "",
      searching: false,
      movies: [],
      movie: {},
      sending: false
    }
  }

  getDirector() {
    let movie = this.state.movie;
    movie.director = MovieStore.getDirector();
    this.setState({movie});
  }

  getSearch() {
    this.setState({
      searching: false,
      movies: MovieStore.getSearch()
    });
  }

  getMovieInfo() {
    let info = MovieStore.getMovieInfo();
    if (info.status) {
      CatalogActions.openSnack("Movie was creeated", 8000);
      this.setState({
        sending: false,
        movie: {
          overview: ""
        }
      });
    } else {
      this.setState({
        sending: false
      });
      CatalogActions.openSnack("Error: movie was not created", 8000);
    }
  }

  componentWillMount() {
    CatalogActions.setPage('add');
    MovieStore.on('changeSearch', this.getSearch);
    MovieStore.on('changeDirector', this.getDirector);
    MovieStore.on('changeMovieInfo', this.getMovieInfo);
  }

  componentWillUnmount() {
    MovieStore.removeListener('changeSearch', this.getSearch);
    MovieStore.removeListener('changeDirector', this.getDirector);
    MovieStore.removeListener('changeMovieInfo', this.getMovieInfo);
  }

  openDialog() {
    this.setState({
      searchOpened: true,
      sending: false,
      movies: []
    });
  }

  closeDialog() {
    this.setState({
      searchOpened: false
    });
  }

  updateTextSearch(textSearch) {
    this.setState({textSearch});
  }

  onSearch(textSearch) {
    this.setState({
      searching: true,
      textSearch
    });
    CatalogActions.searchMovie(textSearch);
  }

  onSelectMovie(movie) {
    if (movie.released_date) {
      movie.releasedDate = new Date(movie.released_date);
      delete movie.releaseDate;
    }
    this.setState({movie});
    this.closeDialog();
    if (movie.tmdbId) {
      CatalogActions.searchMovieDirector(movie.tmdbId);
    }
  }

  handleFormChange(e) {
    let { movie } = this.state;
    let field = e.target.getAttribute('name');
    movie[field] = e.target.value;
    this.setState({movie});
    if (field == "title") {
      this.setState({
        textSearch: e.target.value
      })
    }
  }

  handleDateChange(date) {
    let { movie } = this.state;
    movie.releasedDate = date;
    this.setState({movie});
  }

  transformMovie(movie) {
    if (movie.releasedDate) {
      movie.releasedDate = CatalogFunctions.transformDate(new Date(movie.releasedDate));
    }

    if (movie.director) {
      if (typeof movie.director != "string") {
        movie.director = movie.director.join(', ');
      }
    }

    if (movie.genres) {
      movie.genres_id = movie.genres.map((genre, i) => {
        return genre.id;
      });
      delete movie.genres;
    }

    if (movie.posterUrl) {
      movie.poster = movie.posterUrl;
    }
  }

  onSendForm() {
    this.setState({
      sending: true
    });
    let movie = JSON.parse(JSON.stringify(this.state.movie));
    this.transformMovie(movie);
    CatalogActions.sendMovie(movie);
  }

  render() {
    const { searching, movies, movie, sending } = this.state;
    let { textSearch } = this.state;
    
    return (
      <div>
        <Form
          onChange={this.handleFormChange.bind(this)}
          onSearchButtonClick={this.openDialog.bind(this)}
          onSendForm={this.onSendForm.bind(this)}
          onDateChange={this.handleDateChange.bind(this)}
          movie={movie}
          sending={sending} />
        <SearchDialog
          open={this.state.searchOpened}
          onClose={this.closeDialog.bind(this)}
          onUpdateText={this.updateTextSearch.bind(this)}
          onSearch={this.onSearch.bind(this)}
          onSelectMovie={this.onSelectMovie.bind(this)}
          movies={movies}
          text={textSearch}
          searching={searching} />
      </div>
    );
  }
}