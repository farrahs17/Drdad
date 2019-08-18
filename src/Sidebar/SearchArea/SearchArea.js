import React from 'react';
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";

class SearchArea extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchResults: []
        }
    }
    //remove _results when requests are implemented
    populateResults(key,_results){
        //request to query using the key
        this.setState({searchResults: _results})
    }

    render(){
        return(
            <div className="search-area">
                <Searchbar handleSubmit={this.populateResults.bind(this)}/>
                <SearchResults searchResults = {this.state.searchResults}/>
            </div>
        )
    }
}

export default SearchArea