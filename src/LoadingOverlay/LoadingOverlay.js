import React from "react"
import "./LoadingOverlay.scss"
import {PatientInterface} from "../PatientInterface"

function LoadingOverlay(){
        return(
            <PatientInterface.Consumer>
                {context => {
                    return (
                        <div className={context.state.isLoading ? "show-loader popup": "popup"} id="popup2">
                            <div class="sp sp-hydrogen"></div>
                           
                    </div>)}
                    } 
            </PatientInterface.Consumer>
        )
}

export default LoadingOverlay
