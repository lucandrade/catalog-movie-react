import React from "react";
import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import RaisedButton from 'material-ui/lib/raised-button';
import Avatar from 'material-ui/lib/avatar';

import AppStore from '../../stores/AppStore';
import * as CatalogActions from '../../actions/CatalogActions';
import Constants from '../../constants/AppConstants';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    document.documentElement.style = "background: #e6e6e6";
    document.body.style = "background: #e6e6e6";
    CatalogActions.setPage('about');
  }

  componentWillUnmount() {
    document.documentElement.style = "";
    document.body.style = "";
  }

  render() {
    const imageUrl = Constants.url + Constants.image_uri;
    const subtitle = <span>by <a
                        style={{color: "rgba(0, 0, 0, 0.54)", "text-decoration": "none"}}
                        target="_blank" href="https://br.linkedin.com/in/lucas-andrade-39b901b1">
                        <b>Lucas Andrade</b>
                      </a>
                    </span>;
    return (
      <div>
        <div>
          <Card>
            <CardTitle title="Catalog Movie" subtitle={subtitle} />
            <CardText>
              This is an application that i made to use some great technologies and techniques.
              <br />
              To get the source code of this project use the links below.
              <br />
              <br />
              <RaisedButton
                  label="Backend"
                  linkButton={true}
                  href="https://github.com/lucandrade/catalog-movie-java"
                  secondary={true}
                  target="_blank"
                  labelPosition="before"
                  icon={<Avatar src={imageUrl + "github.png" } />} />
              <RaisedButton
                  label="Frontend"
                  linkButton={true}
                  style={{marginLeft: "10px"}}
                  href="https://github.com/lucandrade/catalog-movie-react"
                  secondary={true}
                  target="_blank"
                  labelPosition="before"
                  icon={<Avatar src={imageUrl + "github.png" } />} />
            </CardText>
          </Card>
        </div>
        <br />
        <div style={{"width": "49%", "display": "inline-block"}}>
          <Card>
            <CardTitle title="Backend" subtitle="Java" />
            <CardText>
              <ul class="tech-list">
                <li>Java EE 8 <Avatar src={imageUrl + "javaee8.png" } /></li>
                <li>Spring Framework 4.2.5 <Avatar src={imageUrl + "spring.png" } /></li>
                <li>Hibernate 5.1 <Avatar src={imageUrl + "hibernate.png" } /></li>
                <li>Tomcat 7 <Avatar src={imageUrl + "tomcat.png" } /></li>
                <li>Docker <Avatar src={imageUrl + "docker.png" } /></li>
              </ul>
            </CardText>
          </Card>
        </div>
        <div style={{"width": "49%", "marginLeft": "2%", "display": "inline-block"}}>
          <Card>
            <CardTitle title="Frontend" subtitle="ReactJS" />
            <CardText>
              <ul class="tech-list">
                <li>EcmaScript 6 <Avatar src={imageUrl + "ecma6.png" } /></li>
                <li>ReactJS <Avatar src={imageUrl + "reactjs.png" } /></li>
                <li>React Flux <Avatar src={imageUrl + "flux.jpg" } /></li>
                <li>Webpack <Avatar src={imageUrl + "webpack.png" } /></li>
                <li>Material UI <Avatar src={imageUrl + "materialui.ico" } /></li>
              </ul>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}