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
                  target="_blank" />
              <RaisedButton
                  label="Frontend"
                  linkButton={true}
                  style={{marginLeft: "10px"}}
                  href="https://github.com/lucandrade/catalog-movie-react"
                  secondary={true}
                  target="_blank" />
            </CardText>
          </Card>
        </div>
        <br />
        <div style={{"width": "49%", "display": "inline-block"}}>
          <Card>
            <CardTitle title="Backend" subtitle="Java" />
            <CardText>
              <ul class="tech-list">
                <li>Java EE 8 <Avatar src="http://www.filecroco.com/64_px/java-runtime-environment-icon-64.png" /></li>
                <li>Spring Framework 4.2.5 <Avatar src="https://pbs.twimg.com/profile_images/378800000502646541/992d3596458fca87741b8e93e7df0860_normal.png" /></li>
                <li>Hibernate 5.1 <Avatar src="http://www.jupra.com/layout/img/hibernate.png" /></li>
                <li>Tomcat 7 <Avatar src="https://s3.amazonaws.com/cloud.ohloh.net/attachments/831/tomcat_med.png" /></li>
                <li>Docker <Avatar src="https://cloud.docker.com/_static/assets/images/dockerimages/docker-64.png" /></li>
              </ul>
            </CardText>
          </Card>
        </div>
        <div style={{"width": "49%", "marginLeft": "2%", "display": "inline-block"}}>
          <Card>
            <CardTitle title="Frontend" subtitle="ReactJS" />
            <CardText>
              <ul class="tech-list">
                <li>EcmaScript 6 <Avatar src="http://jsrocks.org/images/icon-logo-js.png" /></li>
                <li>ReactJS <Avatar src="https://avatars2.githubusercontent.com/reactjs-cn?&s=256" /></li>
                <li>React Flux <Avatar src="https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9bc0948492733596c2ee8c078c546a6f0a1ff1f4/medium.jpg?1422718920" /></li>
                <li>Webpack <Avatar src="https://firebearstudio.com/blog/wp-content/uploads/2015/09/Webpack.png" /></li>
                <li>Material UI <Avatar src="http://www.material-ui.com/images/favicon.ico" /></li>
              </ul>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}