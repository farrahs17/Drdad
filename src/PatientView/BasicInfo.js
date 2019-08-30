import React from "react";
import { PatientInterface } from "../PatientInterface";

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, confirmDelete: 0 };
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

  handleDeleteBlur() {
    this.setState({ confirmDelete: 0 });
  }

  handleDelete(context, e) {
    e.preventDefault();
    // context.deletePatient();
    switch (this.state.confirmDelete) {
      case 0:
        this.setState({ confirmDelete: 1 });
        break;
      case 1:
        this.setState({ confirmDelete: 0 });
        context.deletePatient();
        break;
      default:
        break;
    }
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
                    <div className={`${i}-field `}>
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
                    </div>
                  );
                })}
                <button
                  onClick={this.handleSubmit.bind(this, context)}
                  className="btn-submit"
                  disabled={!context.state.changed}
                  tooltip-active="Save Changes"
                  tooltip-inactive="No Changes to Save"
                >
                  <i class="far fa-edit"></i>
                </button>
                <button
                  onClick={this.handleDelete.bind(this, context)}
                  onBlur={this.handleDeleteBlur.bind(this)}
                  className={
                    this.state.confirmDelete
                      ? "btn-confirm-delete"
                      : "btn-delete"
                  }
                  disabled={!context.state.currentPatient._id}
                  tooltip-active="Delete Patient"
                  tooltip-inactive="No Patient Loaded"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
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
