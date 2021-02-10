import './App.css';
import NavMenu from './components/NavMenu';
import FirstContainer from './components/FirstContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor:'#ebf0f4',height:'98vh'}}>
        <NavMenu />
        
        <FirstContainer  />
      
      </div>
    );
  }
}

export default App;

