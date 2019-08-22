import React from "react";
import {PatientInterface} from "../../PatientInterface"

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.searchKey = "";
  }

  handleSubmit(context,e){
    console.log(context)
    e.preventDefault()
    this.props.populateResults(this.searchKey,context,e)
  }
  
  handleChange(e) {
    this.searchKey = e.target.value;
  }

  render() {
    return (
      <PatientInterface.Consumer>
        {context=>(
          <form onSubmit={this.handleSubmit.bind(this,context)}>
            <input
              className="search-bar"
              onChange={this.handleChange.bind(this)}
              placeholder="Search"
              max="4"
            />
          </form>

        )}
      </PatientInterface.Consumer>
    );
  }
}

export default Searchbar;
