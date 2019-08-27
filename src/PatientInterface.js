import React from "react";
import axios from "axios";
import moment from "moment";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const socket = require("socket.io-client")("http://127.0.0.1:5000")

axios.defaults.timeout = 8000

const PatientInterface = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.emptyPatient = {
      name: "name",
      age: "age",
      gender: "gender",
      history: "history",
      visits: []
    }
    this.state = {
      isLoading: false,
      currentPatient: this.emptyPatient,
      changed: false
    };
    socket.on("here push",(data)=>{
      toast("Patient Changed")
      this.setState({currentPatient: data})
    })
  }

  setLoading(val){
    this.setState({isLoading: val})
  }

  setChanged(val){
    this.setState({changed: val})
  }

  pushPatient(){
    socket.emit("push incoming", this.state.currentPatient)
    
  }

  errToast(err = "ERROR: No error message"){
    toast.error("An error occurred, check your internet connection")
    this.setLoading(false)
    console.log(err)
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
        if(result.data.patient){
          this.setState({currentPatient: result.data.patient})
          this.setLoading(false)
          this.setChanged(false)
          toast("Patient changed")
        }
        else{
          this.errToast()
          }
      })
      .catch(err => {
        this.errToast(err)
      });
  }


  setCurrentPatient(key, value) {
    let currentPatient = { ...this.state.currentPatient };
    currentPatient[key] = value;
    this.setState({ currentPatient: currentPatient });
    this.setChanged(true)
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
    this.setChanged(true)
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
        this.setChanged(false)
      })
      .catch(err => {
        this.errToast(err)
      });
  }

  deletePatient() {
    //DELETE request
    this.setLoading(true)
    axios
      .post("http://localhost:5000/delete", { _id: this.state.currentPatient._id })
      .then(result => {
        toast(`Patient ${this.state.currentPatient.name} deleted`)
        this.setState({currentPatient: this.emptyPatient})
        this.setLoading(false)})
      .catch(err => {
        this.errToast(err)
      });
  }

  createPatient() {
    this.setLoading(true)
    let patient = this.emptyPatient
    axios
      .post("http://localhost:5000/add", { patient: patient })
      .then(result => {
        patient._id = result.data.result._id;
        this.setState({ currentPatient: patient });
        this.setLoading(false)
        toast("New patient created")
        this.setChanged(false)
      })
      .catch(err => {
        this.errToast(err)
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
          setLoading: this.setLoading.bind(this),
          pushPatient: this.pushPatient.bind(this),
          deletePatient: this.deletePatient.bind(this)
        }}
      >
        {this.props.children}
      </PatientInterface.Provider>
    );
  }
}

export { Provider, PatientInterface };
