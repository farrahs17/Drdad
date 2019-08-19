import React from "react";
import {PatientInterface} from "../../PatientInterface"

class SearchResults extends React.Component{
    handleClick(e){
        console.log(e.target.id)
    }
    
    render(){
        return(
            <PatientInterface.Consumer>
                {context=>{
                    return(
                        <div className="search-results">
                            {this.props.searchResults.map(i=>{
                                return(
                                    <button className="search-result-buttonlike" 
                                        onClick={this.handleClick.bind(this)}
                                        id={i.id}>
                                        {i.name}
                                    </button>
                                )
                            })}
                        </div>
                    )
                }}
            </PatientInterface.Consumer>
        )
    }
}

export default SearchResults