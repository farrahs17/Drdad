import React from "react";
import { PatientInterface } from "../PatientInterface";

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.fields = ["name", "age", "gender", "history"];
  }

  handleChange(context, name, e) {
    context.setCurrentPatient(name, e.target.value);
  }

  handleFocusChange() {
    this.setState({ active: !this.state.active });
  }

  handleSubmit(context, e) {
    e.preventDefault();
    context.updatePatient();
  }

  render() {
    return (
      <PatientInterface.Consumer>
        {context => {
          return (
            <div className="basic-info-container">
              <form
                className="basic-info-form"
                onSubmit={this.handleSubmit.bind(this, context)}
              >
                {this.fields.map(i => {
                  return (
                    <div className={`${i}-field basic-info-form`}>
                      <label>
                        {i}:
                        {i != "history" ? (
                          <input
                            className={
                              this.state.active
                                ? "input-enabled"
                                : "input-disabled"
                            }
                            value={context.state.currentPatient[i]}
                            onChange={this.handleChange.bind(this, context, i)}
                            onFocus={this.handleFocusChange.bind(this)}
                            onBlur={this.handleFocusChange.bind(this)}
                          />
                        ) : (
                          <textarea
                            className={
                              this.state.active
                                ? "input-enabled"
                                : "input-disabled"
                            }
                            value={context.state.currentPatient[i]}
                            onChange={this.handleChange.bind(this, context, i)}
                            onFocus={this.handleFocusChange.bind(this)}
                            onBlur={this.handleFocusChange.bind(this)}
                          />
                        )}
                      </label>
                    </div>
                  );
                })}
                <button onClick={this.handleSubmit.bind(this, context)}>
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </PatientInterface.Consumer>
    );
  }
}

export default BasicInfo;
