import React from 'react';

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

class DatepickerSamp extends React.Component{
  getInitialState() {
    return {
      startDate: moment()
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (<DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />);
  }
}

export default DatepickerSamp;
