import React from "react";
import GlobalStates from "../../GlobalStates"

class SearchResults extends React.Component{
    handleClick(e){
        console.log(e.target.id)
    }
    
    render(){
        return(
            <GlobalStates.Consumer>
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
            </GlobalStates.Consumer>
        )
    }
}

export default SearchResults