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
      apiKey: "AIzaSyBwItRyRAUsmRgJuy4UYv4Nb3CK8u_bAYk",
      authDomain: "heuristiceval-6241f.firebaseapp.com",
      databaseURL: "https://heuristiceval-6241f.firebaseio.com",
      projectId: "heuristiceval-6241f",
      storageBucket: "heuristiceval-6241f.appspot.com",
      messagingSenderId: "187388356891"
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
