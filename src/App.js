import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from 'firebase';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Dashboard from './components/Dashboard';
import Report from './components/Report'


class App extends Component {
  componentWillMount(){
    const config = {
      // paste your firebase keys here.
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      
      <div className="App">
      <BrowserRouter>
        <MainContainer>
          <Header/>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/report' component={Report} />
        </MainContainer>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
