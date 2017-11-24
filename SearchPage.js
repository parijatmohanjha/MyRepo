import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText,CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {fullWhite} from 'material-ui/styles/colors';

class SearchPage extends React.Component {
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
      <div>

      </div>
    );
  }

}

export default SearchPage;
