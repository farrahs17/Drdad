import React from "react";
import Sidebar from "./Sidebar";
import PatientView from "./PatientView";
import LoadingOverlay from "./LoadingOverlay";
import "./App.css";
import { Provider } from "./PatientInterface";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <LoadingOverlay />
          <Sidebar />
          <PatientView />
        </div>
      </Provider>
    );
  }
}

export default App;
