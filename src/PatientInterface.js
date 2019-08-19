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
    loadPatient(id) {
        //request patient data by id and assigns it to state
    }

    addVisit() {
        // let currentPatient = this.state.currentPatient.visits.push("")
        // this.setState({currentPatient: currentPatient})
        this.setState((prevState) => ({ currentPatient: [...prevState, ""] }))
    }

    updatePatient() {
        //POST request
    }

    deletePatient() {
        //DELETE request
    }

    createPatient(){
        
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