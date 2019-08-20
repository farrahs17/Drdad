import React from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import axios from "axios";

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }
  //remove _results when requests are implemented
  populateResults(key, _results) {
    //request to query using the key
    axios
      .post("http://localhost:5000/search", { searchKey: key })
      .then(result => {
        console.log(result);
        this.setState({ searchResults: result });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="search-area">
        <Searchbar handleSubmit={this.populateResults.bind(this)} />
        <SearchResults searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchArea;
