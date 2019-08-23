import React from "react";
import {PatientInterface} from "../../PatientInterface"

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.searchKey = "";
    this.state = {error: false}
  }

  handleSubmit(context,e){
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
              minLength="1"
              pattern="(?!^\s).+"
              required
            />
          </form>

        )}
      </PatientInterface.Consumer>
    );
  }
}

export default Searchbar;
