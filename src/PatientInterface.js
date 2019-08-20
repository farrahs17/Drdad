import React from "react";
import axios from "axios";
import moment from "moment";

const PatientInterface = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentPatient: {
        name: "name",
        age: "age",
        gender: "gender",
        history: "history",
        visits: [{date:"",type:"",details:""}]}
    };
  }
  loadPatient(id) {
    //request patient data by id and assigns it to state
    axios
      .get("http://localhost:5000/get",{id: id})
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  setCurrentPatient(key,value){
    let currentPatient = {...this.state.currentPatient}
    currentPatient[key] = value
    this.setState({currentPatient: currentPatient})
    console.log(this.state.currentPatient)
  }

  addVisit() {
    let currentPatient = this.state.currentPatient
    currentPatient.visits.push({ date: moment().format("DD/MM/YYYY, h:mm"), type: "", details: "" })
    console.log(currentPatient)
    this.setState({currentPatient: currentPatient})
    // this.setState(prevState => ({ currentPatient: [...prevState, ""] }));
  }

  updatePatient() {
    axios
      .post("http://localhost:5000/update", {patient: this.state.currentPatient})
      .then(result => console.log(result))
      .catch(err => console.log(err));
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
          setCurrentPatient: this.setCurrentPatient.bind(this),
          updatePatient: this.updatePatient.bind(this),
          addVisit: this.addVisit.bind(this),
          loadPatient: this.loadPatient.bind(this)
        }}
      >
        {this.props.children}
      </PatientInterface.Provider>
    );
  }
}

export { Provider, PatientInterface };
