import React from 'react';
import Entry from "./Entry";
import {PatientInterface} from "../../PatientInterface";

class EntriesList extends React.Component{
    constructor(props){
        super(props)
       

        this.state = { active: false}
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
    handleFocus() {
        this.setState({ active: true })
    }
    handleBlur() {
        this.setState({ active: false })
    }
    handleSubmit(context){
        context.setCurrentPatient("visits",this.newEntries)
    }
    
    render(){
        return(
            <PatientInterface.Consumer>
                {(context)=>{
                    /*
                    return(
                        <div className="entries-list">
                            {context.state.currentPatient.visits.map((i)=>{
                                this.index++
                                return(
                                    <Entry data={i} onChange={this.handleChange.bind(this)} id={this.index}></Entry>
                                )
                            })}
                            <button onClick={this.handleClick.bind(this,context)}>New Visit</button>
                        </div>
                    )*/
                    this.loadEntries(context)
                    return(
                        <div className="entries-list">
                            {this.newEntries.map((i)=>{
                                this.index++
                                return(
                                    <div className="entry">
                                        <p className="entry-date">{i.date || ""}</p>
                                        <div className="entry-details">
                                            <input className={this.state.active ? "input-enabled" : "input-disabled"}
                                                id={this.index}
                                                defaultValue={i.details}
                                                onChange={this.handleChange.bind(this)}
                                                onBlur={this.handleBlur.bind(this)}
                                                onFocus={this.handleFocus.bind(this)} />
                                        </div>
                                    </div>
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