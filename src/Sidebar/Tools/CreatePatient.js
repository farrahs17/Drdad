import React from "react";
import axios from "axios";
class CreatePatient extends React.Component {
  handleClick() {
    axios
      .post("http://localhost:5000/add", { name: "name" })
      .then(result => console.log("success"))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="create-patient-div">
        <button
          className="create-patient-button"
          onClick={this.handleClick}
          type="submit"
        >
          New Patient
        </button>
      </div>
    );
  }
}

export default CreatePatient;
