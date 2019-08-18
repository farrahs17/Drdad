import React from 'react';
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";

class SearchArea extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searhResults: []
        }
    }
    //remove _results when requests are implemented
    populateResults(key,_results){
        //request to query using the key
        this.setState({searhResults: _results})
    }

    render(){
        return(
            <div className="search-area">
                <Searchbar handleSubmit={this.populateResults.bind(this)}/>
                <SearchResults searchResults = {this.state.searhResults}/>
            </div>
        )
    }
}

export default SearchArea