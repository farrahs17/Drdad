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
        this.state.currentPatient.visits.push({date:new Date(),type:"checkup",details: ""})
        //send POST request with the updated patient
    }

    render(){
        return(
            <GlobalStates.Provider value={{ state: this.state }}>
            </GlobalStates.Provider>
        )
    }
}

export default GlobalStates