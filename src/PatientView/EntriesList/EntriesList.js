import React from 'react';
import Entry from "./Entry";
import {PatientInterface} from "../../PatientInterface";

class EntriesList extends React.Component{
    constructor(props){
        super(props)
        this.entries = [{
                date: "DateTime",
                type: "checkup/followup",
                details: "Nisi eiusmod culpa nostrud veniam sunt ullamco labore id enim commodo consectetur pariatur."
             }, {
                date: "DateTime",
                type: "checkup/followup",
                details: "Nisi eiusmod culpa nostrud veniam sunt ullamco labore id enim commodo consectetur pariatur."
            }, {
                date: "DateTime",
                type: "checkup/followup",
                details: "Nisi eiusmod culpa nostrud veniam sunt ullamco labore id enim commodo consectetur pariatur."
            }]

        this.index = -1;
        //holds new values to be sent to database
        this.newEntries = []
    }

    componentDidMount(){
        this.newEntries = this.entries
    }

    handleChange(e){
        this.newEntries[e[0]].details = e[1]
        console.log(this.newEntries)
    }

    handleClick(context){
        context.addVisit()
    }
    
    render(){
        return(
            <PatientInterface.Consumer>
                {(context)=>{
                    return(
                        <div className="entries-list">
                            {this.entries.map((i)=>{
                                this.index++
                                return(
                                    <Entry data={i} onChange={this.handleChange.bind(this)} id={this.index}></Entry>
                                )
                            })}
                        </div>
                    )
                }}
            </PatientInterface.Consumer>
        )
    }
}

export default EntriesList