import React from 'react';
import {Card, CardActions, CardHeader, CardText,CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class LoginPage extends React.Component {
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
      <div width={800}>
      <Card initiallyExpanded={true}>
        <CardHeader
          title="Company Name"
          subtitle="_______________________________________________________________________________"
          actAsExpander={true}
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKO7YlezpwC66Gviop052Y1Cfn9En-xZ0FuZwQIAkpsuC3vyA"
          showExpandableButton={false}
        />
        <CardTitle title="Login Page" align="center" subtitle="Card subtitle" />
        <CardText expandable={true} align="center">
          <div>
            <TextField
              hintText="Username"
              floatingLabelText="Please enter username."
              onChange={this.handleUserNameChange}
              value={this.state.username}
            /><br />
            <TextField
              hintText="Password"
              type="password"
              ref="password"
              floatingLabelText="Please enter password."
            /><br />
          </div>
        </CardText>
        <CardActions align="center" expandable={true}>
          <Button label="Login" backgroundColor="#a4c639" labelColor="#ffffff" onClick={this.handleSubmit}/>
        </CardActions>
      </Card>
      </div>
    );
  }

}

export default LoginPage;
