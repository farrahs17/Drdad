import React from "react"

const GlobalStates = React.createContext()

class GlobalStatesProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            currentPatient: undefined
        }
    }

    loadPatient(id){
        //request patient data by id and assigns it to state
    }

    addVisit(){
        // let currentPatient = this.state.currentPatient.visits.push("")
        // this.setState({currentPatient: currentPatient})
        this.setState((prevState)=>({currentPatient: [...prevState,""]}))
    }

    updatePatient(){
        //POST request
    }

    deletePatient(){
        //DELETE request
    }

    render(){
        return(
            <GlobalStates.Provider value={{ state: this.state }}>
            </GlobalStates.Provider>
        )
    }
}

export default GlobalStates