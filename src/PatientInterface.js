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

  editCurrentPatient(key,value){
    let currentPatient = {...this.state.currentPatient}
    console.log(value)
    currentPatient[key] = value
    this.setState({currentPatient: currentPatient})
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
    let patient = {
      name: "name",
      age: "age",
      gender: "gender",
      history: "history",
      visits: []
    }
    axios
      .post("http://localhost:5000/add",{patient: patient})
      .then(result => {
        patient.id = result.data.result._id
        this.setState({currentPatient: patient})
        console.log("done")
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <PatientInterface.Provider
        value={{
          state: this.state,
          createPatient: this.createPatient.bind(this),
          editCurrentPatient: this.editCurrentPatient.bind(this)
        }}
      >
        {this.props.children}
      </PatientInterface.Provider>
    );
  }
}

export { Provider, PatientInterface };
