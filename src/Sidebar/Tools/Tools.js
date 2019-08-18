import React from 'react';
import CreatePatient from "./CreatePatient";
import PushPatient from "./PushPatient";

class Tools extends React.Component{
    render(){
        return(
            <div className="tools">
                <CreatePatient/>
                <PushPatient/>
            </div>
        )
    }
}

export default Tools