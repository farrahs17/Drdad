import React from "react";
import axios from "axios";

const PatientInterface = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPatient: "fuck"
    };
  }
  loadPatient(id) {
    //request patient data by id and assigns it to state
    axios
      .get("http://localhost:5000/get")
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  addVisit() {
    // let currentPatient = this.state.currentPatient.visits.push("")
    // this.setState({currentPatient: currentPatient})
    this.setState(prevState => ({ currentPatient: [...prevState, ""] }));
  }

  updatePatient() {
    //POST request
  }

  deletePatient(id) {
    //DELETE request
    axios
      .post("http://localhost:5000/delete", { id: id })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  createPatient() {
    axios
      .post("http://localhost:5000/add", {
        patient: {
          name: "name",
          age: "age",
          gender: "gender",
          history: "history",
          visits: []
        }
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <PatientInterface.Provider
        value={{
          state: this.state,
          createPatient: this.createPatient
        }}
      >
        {this.props.children}
      </PatientInterface.Provider>
    );
  }
}

export { Provider, PatientInterface };
