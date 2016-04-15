import React from "react";

import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';

export default class TopBar extends React.Component {
  render() {
    const containerStyle={'position': 'fixed', 'top': '0', left: '256px'}
    return (
      <div>
        <AppBar title="Catalog Movie" showMenuIconButton={false} style={containerStyle} />
      </div>
    );
  }
}