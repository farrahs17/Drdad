import React from 'react';
import BasicInfo from "./BasicInfo"
import EntriesList from "./EntriesList/EntriesList"
import "./PatientView.scss"

class PatientView extends React.Component{
    render(){
        return(
            <div className="patient-view-container">
                <BasicInfo/>
                <EntriesList/>
            </div>
        )
    }
}

export default PatientView