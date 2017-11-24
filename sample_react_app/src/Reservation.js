import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
this.handleChangeStart = this.handleChangeStart.bind(this);
this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }


  getInitialState() {
    return {
      value: moment()
    };
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    if(this.state.startDate > this.state.endDate ){
      alert('Invalid Date')
    }else{
      this.setState({
        endDate: date
      });
    }

  }

  render() {
    return (
<div class="box">
<label>
Pick Start Date:
<DatePicker
selected={this.state.startDate}
selectsStart
minDate={moment()}
startDate={this.state.startDate}
endDate={this.state.endDate}
onChange={this.handleChangeStart}
/>
</label>
<br/>
<label>
Pick End Date:
<DatePicker
selected={this.state.endDate}
minDate={moment()}
selectsEnd
startDate={this.state.startDate}
endDate={this.state.endDate}
onChange={this.handleChangeEnd}
/>
</label>

</div>
      );
  }

}

export default Reservation;
