import React from "react";
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

import * as CatalogFunctions from '../../../utils/CatalogFunctions';

export default class Form extends React.Component {
  handleSearchButtonClick() {
    this.props.onSearchButtonClick();
  }
  handleFormChange(e) {
    this.props.onChange(e);
  }
  formatDate(date) {
    let newDate = new Date(date);
    return CatalogFunctions.transformDate(newDate);
  }
  handleDateChange(e, date) {
    this.props.onDateChange(date);
  }
  handleSendForm() {
    this.props.onSendForm();
  }
  render() {
    const { sending, movie } = this.props;
    const { title="", overview="", posterUrl="", releasedDate, director="" } = movie;
    const sendText = sending ? "Sending..." : "Send";
    const sendDisabled = !(overview != "" && title != "" && director != "" && releasedDate) || sending;
    return (
      <div>
        <TextField
          floatingLabelText="Title"
          disabled={sending}
          value={title}
          name="title"
          fullWidth={true}
          onChange={this.handleFormChange.bind(this)} />
        <RaisedButton
          disabled={sending}
          label="Search"
          primary={true}
          onTouchTap={this.handleSearchButtonClick.bind(this)} />
        <TextField
          floatingLabelText="Director"
          disabled={sending}
          value={director}
          name="director"
          fullWidth={true}
          onChange={this.handleFormChange.bind(this)} />
        <TextField
          value={overview}
          disabled={sending}
          name="overview"
          fullWidth={true}
          rows={3}
          multiLine={true}
          floatingLabelText="Overview, Plot"
          onChange={this.handleFormChange.bind(this)} />
        <DatePicker
          value={releasedDate}
          disabled={sending}
          name="releasedDate"
          floatingLabelText="Release Date"
          formatDate={this.formatDate.bind(this)}
          onChange={this.handleDateChange.bind(this)} />
        <RaisedButton
          label={sendText}
          disabled={sendDisabled}
          secondary={true}
          onTouchTap={this.handleSendForm.bind(this)} />
      </div>
    );
  }
}