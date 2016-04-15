import React from "react";
import GridTile from 'material-ui/lib/grid-list/grid-tile';

export default class Movie extends React.Component {
  render() {
    const { id, name, director } = this.props.movie;
    return (
      <GridTile
          key={id}
          title={name}
          subtitle={<span>by <b>{director}</b></span>}>
      </GridTile>
    );
  }
}