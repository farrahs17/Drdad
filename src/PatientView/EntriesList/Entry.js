import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleFocusChange() {
    this.setState({ active: !this.state.active });
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    return (
      <Card className="entry">
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <p className="entry-date">{this.props.date || ""}</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <div className="entry-details">
            <textarea
              className={this.state.active ? "input-enabled" : "input-disabled"}
              id={this.props.id}
              defaultValue={this.props.details}
              onChange={this.handleChange.bind(this)}
              onBlur={this.handleFocusChange.bind(this)}
              onFocus={this.handleFocusChange.bind(this)}
            />
          </div>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default Entry;
