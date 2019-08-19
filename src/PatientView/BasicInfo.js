import React from 'react';
import {PatientInterface} from "../PatientInterface"

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {active:false}
        this.fields = ["name","age","gender","history"]
    }
    
    handleChange(context,name,e){
        context.editCurrentPatient(name,e.target.value)
    }

    handleFocus(){
        this.setState({active: true})
    }

    handleSubmit(context, e){
        e.preventDefault()
        console.log("poop")
    }

    handleBlur(){
        this.setState({ active: false })
    }

    render(){
        return(
            <PatientInterface.Consumer>
                {context=>{
                    return(
                        <div className="basic-info-container">
                            <form className = "basic-info-form" onSubmit={this.handleSubmit.bind(this,context)}>
                                {this.fields.map(i=>{
                                    return(
                                        <div className={`${i}-field`}>
                                            <label>{i}: 
                                                <input className={this.state.active ? "input-enabled" : "input-disabled"}
                                                    value={context.state.currentPatient[i]}
                                                    onChange={this.handleChange.bind(this,context, i)}
                                                    onFocus={this.handleFocus.bind(this)}
                                                    onBlur={this.handleBlur.bind(this)} />
                                            </label>
                                        </div>
                                    )
                                })}
                                <button onClick={this.handleSubmit.bind(this,context)}>Submit</button>
                            </form>
                        </div>
                    )
                }
                }
            </PatientInterface.Consumer> 
        )
    }
}

export default BasicInfo