import React from 'react';
import {PatientInterface} from "../PatientInterface"

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {name:"",age:"",gender:"",history:"",active:false}
        this.fields = ["name","age","gender","history"]
    }
    
    handleChange(name,e){
        this.setState({[name]:e.target.value})
    }

    handleFocus(){
        this.setState({active: true})
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
                            {this.fields.map(i=>{
                                return(
                                    <div className={`${i}-field`}>
                                        <label>{i}: 
                                            <input className={this.state.active ? "input-enabled" : "input-disabled"}
                                                value={this.state[i]}
                                                onChange={this.handleChange.bind(this, i)}
                                                onFocus={this.handleFocus.bind(this)}
                                                onBlur={this.handleBlur.bind(this)} />
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                }
            </PatientInterface.Consumer> 
        )
    }
}

export default BasicInfo