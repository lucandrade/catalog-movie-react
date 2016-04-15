import React from "react";
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Tv from 'material-ui/lib/svg-icons/hardware/tv';
import Update from 'material-ui/lib/svg-icons/content/add';
import Info from 'material-ui/lib/svg-icons/action/info';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

import { Navigation, browserHistory } from 'react-router';

window.bb = browserHistory;

import * as Actions from '../actions/CatalogActions';
import AppStore from '../stores/AppStore';

let SelectableList = SelectableContainerEnhance(List);

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
  }

  componentWillMount() {
    AppStore.on('pagechange', this.setPage);
  }

  componentWillUnmount() {
    AppStore.removeListener('pagechange', this.setPage);
  }

  toPage = (event, index) => {
    Actions.setPage(index);
  }

  setPage = (index) => this.setState({index});

  render() {

    const containerStyle={'overflow': 'hidden'};

    const listOptions = {
      value: AppStore.getPage(),
      requestChange: this.toPage
    }

    return (
      <div>
        <LeftNav open={true} containerStyle={containerStyle} valueLink={listOptions}>
          <SelectableList subheader="Pages" valueLink={listOptions}>
            <ListItem id="teste" primaryText="Movies" value="movie" rightIcon={<Tv />} />
            <ListItem primaryText="New Movie" value="add" rightIcon={<Update />} />
            <ListItem primaryText="About" value="about" rightIcon={<Info />} />
          </SelectableList>
        </LeftNav>
      </div>
    );
  }
}