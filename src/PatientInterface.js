import React from "react";

const PatientInterface = React.createContext()

class Provider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            currentPatient: "fuck"
        }
    }

    render(){
        return(
            <PatientInterface.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
            </PatientInterface.Provider>
        )
    }
}

export { Provider, PatientInterface };