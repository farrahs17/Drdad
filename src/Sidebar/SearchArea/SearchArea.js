import React from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import axios from "axios";
import {PatientInterface} from "../../PatientInterface"

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }
  //remove _results when requests are implemented
  populateResults(key,e) {
    // e.preventDefault()
    //request to query using the key
    axios
      .post("http://localhost:5000/search", { searchKey: key })
      .then(result => {
        console.log(result);
        this.setState({ searchResults: result.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="search-area">
          <Searchbar populateResults={this.populateResults.bind(this)} />
          <SearchResults searchResults={this.state.searchResults} />
        </div>
    );
  }
}

export default SearchArea;
