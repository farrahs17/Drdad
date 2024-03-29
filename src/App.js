import React from "react";
import Sidebar from "./Sidebar";
import PatientView from "./PatientView";
import LoadingOverlay from "./LoadingOverlay";
import "./App.css";
import { Provider } from "./PatientInterface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="app-container">
          <ToastContainer autoClose="2000" />
          <LoadingOverlay />
          <Sidebar />
          <PatientView />
        </div>
      </Provider>
    );
  }
}

export default App;
