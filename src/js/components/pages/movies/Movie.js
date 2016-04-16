import React from "react";
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import Constants from '../../../constants/AppConstants';

export default class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  handleImageLoad(loaded) {
    if (loaded === true) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { id, title, director, poster } = this.props.movie;
    const { loading } = this.state;
    let imageStyle = { display: "none" };

    if (!loading) {
      imageStyle = {};
    }

    let image = [<img
                  style={imageStyle}
                  onLoad={this.handleImageLoad.bind(this, true)}
                  onError={this.handleImageLoad.bind(this, false)}
                  src={poster} />];

    if (loading) {
      image.push(<img src={Constants.url + Constants.image_uri + "no_image_available.png" } />);
    }

    const titleStyle = {
      fontSize: "18px",
      "lineHeight": "20px",
      "marginBottom": "6px"
    }
    const subTitleStyle = {
      fontSize: "12px"
    }
    const cardTitle = <CardTitle
      titleStyle={titleStyle}
      subtitleStyle={subTitleStyle}
      title={title}
      subtitle={<span>by <b>{director}</b></span>} />;
    return (
      <div style={{width: "18%", "marginLeft": "1%", display: "inline-block"}}>
        <Card>
          <CardMedia overlay={cardTitle}>
            {image}
          </CardMedia>
        </Card>
      </div>
    );
  }
}