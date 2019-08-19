<<<<<<< HEAD
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
=======
import React from "react"

class CreatePatient extends React.Component{
    render(){
        return(
            <div className="create-patient-div">
                <button className="create-patient-button">New Patient</button>
            </div>
        )
    }
>>>>>>> parent of 520d63e... creating onClick
}

export default CreatePatient;
