import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/HomePage'
import About from './components/about/About'
import { Switch,Route } from 'react-router-dom';
import Vase from './components/vase/Vase'

class App extends React.Component {
  render(){
    return (
      <div>
      <Switch>
      <Route exact path='/Med_arch_Client2' component={HomePage} ></Route>
      <Route path='/Med_arch_Client2/about' component={HomePage}></Route>
      <Route exact path='/Med_arch_Client2/:id' component={Vase}></Route>
      </Switch>
      </div>
    );
  }
  }
  

export default App;
