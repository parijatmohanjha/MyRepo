import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import axios from 'axios';

import Search from 'material-ui-icons/Search';
import Typography from 'material-ui/Typography';




const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'Left',
    color: theme.palette.text.secondary,
  },
});

class PbsWalAccess extends React.Component{

  constructor(props, context) {
    super(props, context);


    this.state = {
      selected: [],
      data: [],
      page: '0',
      username: '',
      id:'',
      name: '',
      email: '',
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.fetchuser = this.fetchuser.bind(this);
  }

  fetchuser(event){
    axios
      .get('https://jsonplaceholder.typicode.com/users/'+this.state.username)
      .then(({ data })=> {
      	this.setState({
          id: data.id,
          name: data.name,
        });
      })
      .catch((err)=> {alert('No data found.')})
  }

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleUserNameChange(event) {
    this.setState({username: event.target.value.toUpperCase()});
  };

  render() {
  const { classes } = this.props;


  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>
              <Typography type="Title" className={classes.title} align="center">
                PB Skip and WAL Access
              </Typography>
              <TextField
              Label="User Id"
                hintText="UserId"
                value={this.state.id}/>
              <Divider/>
                <TextField
                Label="Name"
                  hintText="Name"
                  value={this.state.name}/>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}
}

PbsWalAccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PbsWalAccess);
