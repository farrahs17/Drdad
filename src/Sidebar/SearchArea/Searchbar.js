import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.searchKey = "";
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.searchKey);
    this.props.handleSubmit(this.searchKey, [
      { name: "pee", id: "4" },
      { name: "pee", id: "420" },
      { name: "poo", id: "69" },
      { name: "poo", id: "46" }
    ]);
  }
  handleChange(e) {
    this.searchKey = e.target.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
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
