import React from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import axios from "axios";
import {toast} from "react-toastify"

axios.defaults.timeout = 8000

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }
  //remove _results when requests are implemented
  populateResults(key,context,e) {
    //request to query using the key
    context.setLoading(true)
    axios
      .post("http://localhost:5000/search", { searchKey: key })
      .then(result => {
        context.setLoading(false)
        this.setState({ searchResults: result.data });
      })
      .catch(err => {
        console.log("wat")
        context.setLoading(false)
        toast.error("An error occurred, check your internet connection")
      });
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
