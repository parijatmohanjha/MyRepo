import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import LandingPage from './components/LandingPage';
import {TextField} from 'material-ui';



export default class App extends React.Component {

  render() {
    return (
  <MuiThemeProvider >
    <LandingPage/>
  </MuiThemeProvider>
    );
  }
}
