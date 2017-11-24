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
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';




const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 10,
    textAlign: 'Center',
    color: theme.palette.text.secondary,
  },
  checked: {
    color: green[500],
  },

});

class SpecialAccess extends React.Component{

  constructor(props, context) {
    super(props, context);


    this.state = {
    mte: true,
    mtg: false,
    drp: true,

    };

  }

  handleChange = name => (event, checked) => {
      this.setState({ [name]: checked });
    };

  render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
        <Grid spacing={12}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>
              <Typography type="Title" className={classes.title} align="center">
                Special Access
              </Typography>
              <FormControl component="fieldset">
                <FormGroup>

                  <FormControlLabel
                    control={
                      <div >
                      <Checkbox
                        checked={this.state.gilad}
                        onChange={this.handleChange('mte')}
                        value="mte"
                        classes={{
                          checked: classes.checked,
                        }}

                      />

                      </div>
                    }
                    label="Manual Transasction Entry (MTE)"

                  />


                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.jason}
                        onChange={this.handleChange('mtg')}
                        value="mtg"
                        classes={{
                          checked: classes.checked,
                        }}
                      />
                    }
                    label="Manual Transasction Generation (MTG)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.antoine}
                        onChange={this.handleChange('drp')}
                        value="drp"
                        classes={{
                          checked: classes.checked,
                        }}
                      />
                    }
                    label="Document Receipt Procecssor"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        classes={{
                          checked: classes.checked,
                          bar: classes.bar,
                        }}
                        checked={this.state.checkedE}
                        onChange={this.handleChange('checkedE')}
                        aria-label="checkedD"
                      />
                    }
                    label="B"
                  />
                </FormGroup>

              </FormControl>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}
}

SpecialAccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecialAccess);
