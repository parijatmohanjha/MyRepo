import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import AccountBox from 'material-ui-icons/AccountBox';
import EnhancedTable from './EnhancedTableToolbar.js';
import SpecialAccess from './SpecialAccess';
import PbsWalAccess from './PbsWalAccess';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Search from 'material-ui-icons/Search';
import Typography from 'material-ui/Typography';
import amber from 'material-ui/colors';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class SplAccessLanding extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root} >
      <Grid item xs={6} spacing={12} >
        <Paper className={classes.paper}>
        <Typography type="Title" className={classes.title} align="center">
        Search
      </Typography>
          <FormControl>
          <div align="bottom">
          <TextField
            className={classes.textField}
            hintText="UserId"
            label="User Id:"
            margin="normal"
            floatingLabelText="Please enter userId."
            onChange={this.handleUserNameChange}
            helperText="Please enter the User Id."
            value={this.state.username}>
          </TextField>
          <Button color="primary" fab onClick={this.fetchuser} style={{ width: 35, height: 10 }}><Search/></Button>
          </div>
          </FormControl>
        </Paper>

      </Grid>
      <br/>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="accent"
            textColor="accent"
            centered
          >
            <Tab label="Special Access" icon={<AccountBox/>}/>
            <Tab label="PB Skip and WAL Access" icon={<AccountBox/>}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={theme.direction}>
            <SpecialAccess/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
              <PbsWalAccess/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

SplAccessLanding.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SplAccessLanding);
