import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FormComponent from './components/FormComponent.js';
import TextField from 'material-ui/TextField';

import {fullWhite} from 'material-ui/styles/colors';

class MyAwesomeReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', username: '', password: ''};

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handleUserNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({username: event.target.value.toUpperCase()});
  }

  handlePasswordChange(event) {
    this.setState({username: this.state.username, password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: '+ this.state.username + '~~' + this.refs.password.getValue());
    // event.preventDefault();
  }


  render() {
    return (
      <div class="box">
      <Card>
        <CardHeader
          title="Login Page"
          subtitle="Enter Username and password and click Login"
          actAsExpander={false}
          showExpandableButton={true}
        />
        <CardText expandable={false}>
        <div>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Please enter username."
            onChange={this.handleUserNameChange}
            value={this.state.username}
          /><br />
          <TextField
            hintText="Hint Text"
            type="password"
            floatingLabelText="Please enter password."
            ref="password"
          /><br />
      </div>
        </CardText>
        <CardActions>
          <RaisedButton label="Login" backgroundColor="#a4c639" labelColor="#ffffff" onClick={this.handleSubmit}/>
        </CardActions>
      </Card>

      </div>
    );
  }

}

export default MyAwesomeReactComponent;
