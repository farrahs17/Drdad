import React from 'react';

class Entry extends React.Component{
    constructor(props){
        super(props)
        this.state = {active:false}
    }

    handleFocusChange() {
        this.setState({ active: !this.state.active })
    }

    handleChange(e){
        this.props.handleChange(e)
    }

    render(){
        return(
            <div className="entry">
                <p className="entry-date">{this.props.date || ""}</p>
                <div className="entry-details">
                    <textarea className={this.state.active ? "input-enabled" : "input-disabled"}
                        id={this.props.id}
                        defaultValue={this.props.details}
                        onChange={this.handleChange.bind(this)}
                        onBlur={this.handleFocusChange.bind(this)}
                        onFocus={this.handleFocusChange.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Entry
