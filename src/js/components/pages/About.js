import React from "react";

import AppStore from '../../stores/AppStore';
import * as CatalogActions from '../../actions/CatalogActions';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    CatalogActions.setPage('about');
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        sdfgsdfgdsfg
      </div>
    );
  }
}