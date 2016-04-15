import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import Tv from 'material-ui/lib/svg-icons/hardware/tv';

export default class SearchResult extends React.Component {
  handleSelect(movie) {
    this.props.onSelectMovie(movie);
  }
  render() {
    const { movies } = this.props;
    const items = movies.map((movie, i) => {
      if (movie.posterUrl) {
        return <ListItem
                  key={i}
                  primaryText={movie.title}
                  onTouchTap={this.handleSelect.bind(this, movie)}
                  leftAvatar={<Avatar src={movie.posterUrl} />} />
      } else {
        return <ListItem
                  key={i}
                  primaryText={movie.title}
                  onTouchTap={this.handleSelect.bind(this)}
                  leftIcon={<Tv style={{"marginLeft": "20px"}} />} />
      }
    });
    return (
      <div>
        <List subheader={movies.length + " movies found"} style={{ "overflow": "scroll", "maxHeight": "280px" }}>
          {items}
        </List>
      </div>
    );
  }
}