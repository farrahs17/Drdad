import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import Sidebar from "./Sidebar"
import PatientView from "./PatientView"
import './App.css';
import { Provider } from './PatientInterface'

class App extends React.Component {
  render(){
    return (
      <Provider>
        <div>
          <Sidebar/>
          <PatientView/>
        </div>
      </Provider>
      )
  }
}

export default App;
