import React from "react";
import axios from "axios";
import {PatientInterface} from "../../PatientInterface"
class CreatePatient extends React.Component {
  handleClick(context) {
    context.createPatient()
  }
  render() {
    return (
    <PatientInterface.Consumer>
    {(context=>(
        <div className="create-patient-div">
          <button
            className="create-patient-button"
            onClick={this.handleClick.bind(this,context)}
            type="submit"
          >
            New Patient
          </button>
        </div>
    ))}
    </PatientInterface.Consumer>
    );
  }
}

export default CreatePatient;
