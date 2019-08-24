import React from "react"
import {PatientInterface} from "../../PatientInterface"

class PushPatient extends React.Component {
    render(){
        return(
            <PatientInterface.Consumer>
                {context=>(
                    <div className="push-patient-div">
                        <button className="push-patient-button" onClick={context.pushPatient}>Push Patient</button>
                    </div>
                )}
            </PatientInterface.Consumer>
                    
        )
    }
}

export default PushPatient