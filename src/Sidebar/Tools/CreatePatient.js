import React from "react"
import axios from "axios"
class CreatePatient extends React.Component{
    handleClick(){

    }
    render(){
        return(
            <div className="create-patient-div">
                <button className="create-patient-button" onClick={this.handleClick}>New Patient</button>
            </div>
        )
    }
}

export default CreatePatient