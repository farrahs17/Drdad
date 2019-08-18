import React from 'react';
import GlobalStates from "../GlobalStates"

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {name:"",age:"",gender:"",history:"",active:false}
        this.fields = ["name","age","gender","history"]
    }
    
    handleChange(name,e){
        switch(name){
            case "name":
                this.setState({ name: e.target.value })
                break;
            case "age":
                this.setState({ age: e.target.value })
                break;
            case "gender":
                this.setState({ gender: e.target.value })
                break;
            case "history":
                this.setState({ history: e.target.value })
                break;
            default:
                break;
        }
    }

    handleFocus(){
        this.setState({active: true})
    }

    handleBlur(){
        this.setState({ active: false })
    }

    render(){
        return(
            <GlobalStates.Consumer>
                {context=>{
                    return(
                        <div className="basic-info-container">
                            {this.fields.map(i=>{
                                return(
                                    <div className={`${i}-field`}>
                                        <label>{i}: </label>
                                        <input className={this.state.active ? "input-enabled" : "input-disabled"}
                                            value={this.state[i]}
                                            onChange={this.handleChange.bind(this, i)}
                                            onFocus={this.handleFocus.bind(this)}
                                            onBlur={this.handleBlur.bind(this)} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                }
            </GlobalStates.Consumer> 
        )
    }
}

export default BasicInfo