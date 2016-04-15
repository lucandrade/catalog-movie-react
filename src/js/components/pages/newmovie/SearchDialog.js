import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import SearchResult from './SearchResult';
import MovieStore from '../../../stores/MovieStore';
import * as CatalogActions from '../../../actions/CatalogActions';

export default class SearchDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    this.props.onClose();
  }

  handleUpdateText(e) {
    this.props.onUpdateText(e.target.value);
  }

  handleSearch(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onSearch(this.props.text);
  }

  handleSelectMovie(movie) {
    this.props.onSelectMovie(movie);
  }

  render() {
    const { text, movies, searching } = this.props;
    const buttonDisabled = (text.length < 3) || searching;
    const label = searching ? "Searching..." : "Search";
    return (
      <div>
        <Dialog
          title="Dialog"
          actions={[]}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose.bind(this)}>
          <TextField
            disabled={searching}
            value={text}
            hintText="Type the title"
            onChange={this.handleUpdateText.bind(this)}
            onEnterKeyDown={this.handleSearch.bind(this)} />
          <RaisedButton
            disabled={buttonDisabled}
            label={label}
            secondary={true}
            style={{marginLeft: "10px", "height": "28px"}}
            labelStyle={{"fontSize": "12px!important"}}
            onTouchTap={this.handleSearch.bind(this)} />
          <SearchResult onSelectMovie={this.handleSelectMovie.bind(this)} movies={movies} />
        </Dialog>
      </div>
    );
  }
}