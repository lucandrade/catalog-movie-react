import React from "react";

import TopBar from "./TopBar";
import Nav from "./Nav";
import Table from "./Table";
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import TextField from 'material-ui/lib/text-field';
import Snackbar from 'material-ui/lib/snackbar';

import AppStore from '../stores/AppStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setSnackbar = this.setSnackbar.bind(this);
    this.state = {
      snackbar: {
        open: false
      }
    }
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.props.history.push(page);
  }

  setSnackbar = () => {
    this.setState({
      snackbar: AppStore.getSnackBar()
    });
  }

  componentWillMount() {
    AppStore.on('pagechange', this.setPage);
    AppStore.on('snackbar', this.setSnackbar);
  }

  componentWillUnmount() {
    AppStore.removeListener('pagechange', this.setPage);
    AppStore.removeListener('snackbar', this.setSnackbar);
  }

  onSnackBarClose(onClose) {
    this.setState({
      snackbar: {
        open: false
      }
    });
    onClose();
  }

  render() {
    const style = {
      marginLeft: '256px',
      padding: '20px',
      marginTop: '64px'
    }
    const { open=false, message="", duration=4000, onClose = () => {} } = this.state.snackbar;
    return (
      <div>
        <TopBar />
        <Nav />
        <div style={style}>
          {this.props.children}
          <Snackbar
            style={{fontFamily: "Roboto"}}
            open={open}
            message={message}
            autoHideDuration={duration}
            onRequestClose={this.onSnackBarClose.bind(this, onClose)} />
        </div>
      </div>
    );
  }
}