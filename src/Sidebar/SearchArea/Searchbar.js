import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.searchKey = "";
  }

  handleSubmit(key,e){
    e.preventDefault()
    this.props.populateResults(this.searchKey)
    // console.log(this.searchKey)
  }
  
  handleChange(e) {
    this.searchKey = e.target.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this,this.searchKey)}>
        <input
          className="search-bar"
          onChange={this.handleChange.bind(this)}
          placeholder="Search"
        />
      </form>
    );
  }
}

export default Searchbar;
