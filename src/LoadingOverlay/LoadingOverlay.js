import React from "react"
import "./LoadingOverlay.scss"
import {PatientInterface} from "../PatientInterface"

function LoadingOverlay(){
        return(
            <PatientInterface.Consumer>
                {context => {
                    return (
                        <div className={context.state.isLoading ? "show-loader popup": "popup"}>
                            <div className="sp sp-hydrogen"></div>
                           
                    </div>)}
                    } 
            </PatientInterface.Consumer>
        )
}

export default LoadingOverlay
