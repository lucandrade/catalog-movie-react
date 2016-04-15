import React from "react";
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

import GenreStore from '../../stores/GenreStore';
import MovieStore from '../../stores/MovieStore';
import AppStore from '../../stores/AppStore';
import Movie from './movies/Movie';
import * as CatalogActions from '../../actions/CatalogActions';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.getGenres = this.getGenres.bind(this);
    this.getList = this.getList.bind(this);
    this.state = {
      genres: [],
      loading: true,
      value: null
    }
    CatalogActions.listGenres();
    CatalogActions.listMovies();
  }

  getList() {
    this.setState({
      movies: MovieStore.getList()
    });
  }

  getGenres() {
    this.setState({
      genres: GenreStore.getAll(),
      loading: false
    });
  }

  handleChange = (event, index, value) => this.setState({value});

  componentWillMount() {
    // document.documentElement.style = "background: #e6e6e6";
    // document.body.style = "background: #e6e6e6";
    CatalogActions.setPage('movie');
    GenreStore.on('change', this.getGenres);
    MovieStore.on('changeList', this.getList);
  }

  componentWillUnmount() {
    // document.documentElement.style = "";
    document.body.style = "";
    GenreStore.removeListener('change', this.getGenres);
    MovieStore.removeListener('changeList', this.getList);
  }

  render() {
    const { genres, loading, movies } = this.state;
    const text = loading ? "Loading genres" : "Genre";
    let items = [];
    if (!loading) {
      items = genres.map((genre, i) => {
        return <MenuItem key={i} value={genre.slug} primaryText={genre.name} />;
      });
    }
    const moviesTiles = movies.map({

    });
    return (
      <div>
        <SelectField
          value={this.state.value}
          floatingLabelText={text}
          onChange={this.handleChange.bind(this)}>
          {items}
        </SelectField>
      </div>
    );
  }
}