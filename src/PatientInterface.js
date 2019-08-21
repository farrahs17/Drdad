import React from "react";
import axios from "axios";
import moment from "moment";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

axios.defaults.timeout = 8000

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
        visits: [{ date: "", type: "", details: "" }]
      }
    };
  }

  setLoading(val){
    this.setState({isLoading: val})
  }

  loadPatient(id) {
    //request patient data by id and assigns it to state
    let patient = {
      name: "name",
      age: "age",
      gender: "gender",
      history: "history",
      visits: []
    };
    this.setState({currentPatient: patient})
    this.setLoading(true)
    axios
      .post("http://localhost:5000/get", { id: id })
      .then(result => {
        this.setState({currentPatient: result.data.patient})
        this.setLoading(false)
        toast("Patient changed")
      })
      .catch(err => {
        toast("An error occurred, check your internet connection")
        this.setLoading(false)
      });
  }


  setCurrentPatient(key, value) {
    let currentPatient = { ...this.state.currentPatient };
    currentPatient[key] = value;
    this.setState({ currentPatient: currentPatient });
    console.log(this.state.currentPatient);
  }

  addVisit() {
    let currentPatient = this.state.currentPatient;
    currentPatient.visits.push({
      date: moment().format("DD/MM/YYYY, h:mm"),
      type: "",
      details: ""
    });
    console.log(currentPatient);
    this.setState({ currentPatient: currentPatient });
    // this.setState(prevState => ({ currentPatient: [...prevState, ""] }));
  }

  updatePatient() {
    this.setLoading(true)
    axios
      .post("http://localhost:5000/update", {
        patient: this.state.currentPatient
      })
      .then(result => {
        this.setLoading(false)
        toast(`Patient ${this.state.currentPatient.name} updated successfully`)
      })
      .catch(err => {
        toast("An error occurred, check your internet connection")
        this.setLoading(false)
      });
  }

  deletePatient(id) {
    //DELETE request
    this.setLoading(true)
    axios
      .post("http://localhost:5000/delete", { id: id })
      .then(result => this.setLoading(false))
      .catch(err => {
        toast("An error occurred, check your internet connection")
        this.setLoading(false)
      });
  }

  createPatient() {
    let patient = {
      name: "name",
      age: "age",
      gender: "gender",
      history: "history",
      visits: []
    };
    this.setLoading(true)
    axios
      .post("http://localhost:5000/add", { patient: patient })
      .then(result => {
        patient._id = result.data.result._id;
        this.setState({ currentPatient: patient });
        this.setLoading(false)
        toast("New patient created")
      })
      .catch(err => {
        toast("An error occurred, check your internet connection")
        this.setLoading(false)
      });
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
          loadPatient: this.loadPatient.bind(this),
          setLoading: this.setLoading.bind(this)
        }}
      >
        {this.props.children}
      </PatientInterface.Provider>
    );
  }
}

export { Provider, PatientInterface };
