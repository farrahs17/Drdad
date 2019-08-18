import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import Sidebar from "./Sidebar"
import PatientView from "./PatientView"
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Sidebar/>
        <PatientView/>
      </div>
      )
  }
}

export default App;
