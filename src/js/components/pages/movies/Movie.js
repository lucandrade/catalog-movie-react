import React from "react";
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export default class Movie extends React.Component {
  render() {
    const { id, title, director, poster } = this.props.movie;
    let image = <img src={poster} />;
    if (!poster) {
      image = <img src="http://www.hollymatic.com/sites/default/files/styles/product_medium/public/no_image_available.png?itok=-tNvqcyn" />;
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