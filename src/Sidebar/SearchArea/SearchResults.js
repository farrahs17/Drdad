import React from "react";
import { PatientInterface } from "../../PatientInterface";

class SearchResults extends React.Component {
  handleClick(context, id, e) {
    context.loadPatient(id);
  }

  render() {
    return (
      <PatientInterface.Consumer>
        {context => {
          return (
            <div className="search-results">
              {this.props.searchResults.map(i => {
                return (
                  <button
                    className="search-result-buttonlike search-item"
                    onClick={this.handleClick.bind(this, context, i._id)}
                    id={i._id}
                  >
                    {i.name}
                  </button>
                );
              })}
            </div>
          );
        }}
      </PatientInterface.Consumer>
    );
  }
}

export default SearchResults;
