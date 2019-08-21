import React from 'react';
import Entry from "./Entry";
import {PatientInterface} from "../../PatientInterface";

class EntriesList extends React.Component{
    constructor(props){
        super(props)
        this.newEntries = [{date:"",type:"",details:""}]
        this.index = -this.newEntries.length - 1;
    }

    loadEntries(context){
        this.newEntries = [...context.state.currentPatient.visits]
        this.index = - 1;
    }

    componentDidMount(){
        this.index = -this.newEntries.length - 1;
    }

    handleChange(e){
        this.newEntries[e.target.id].details = e.target.value
    }

    handleClick(context){
        this.index = -this.newEntries.length - 1;
        context.addVisit()
    }

    handleSubmit(context){
        context.setCurrentPatient("visits",this.newEntries)
    }
    
    render(){
        return(
            <PatientInterface.Consumer>
                {(context)=>{
                    this.loadEntries(context)
                    return(
                        <div className="entries-list">
                            {
                                this.newEntries.map((i)=>{
                                    this.index++
                                    return(
                                        <Entry date={i.date} id={this.index} details={i.details} handleChange={this.handleChange.bind(this)}/>
                                    )
                                })
                            }
                            <button onClick={this.handleClick.bind(this, context)}>New Visit</button>
                            <button onClick={this.handleSubmit.bind(this, context)}>Submit</button>
                        </div>
                    )
                }}
            </PatientInterface.Consumer>
        )
    }
}

export default EntriesList