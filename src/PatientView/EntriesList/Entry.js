import React from 'react';

class Entry extends React.Component{
    constructor(props){
        super(props)
        this.state = {active:false, currentText: ""}
    }

    componentDidMount(){
        this.setState({currentText: this.props.data.details})
    }
    handleChange(e){
        this.setState({currentText: e.target.value})
        console.log(this.props.id)
        this.props.onChange([this.props.id,e.target.value])
    }
    handleFocus() {
        this.setState({ active: true })
    }
    handleBlur() {
        this.setState({ active: false })
    }

    render(){
        return(
            <div className="entry">
                <p className="entry-date">
                    {this.props.data.date}
                </p>
                <div className="entry-details">
                    <input className={this.state.active ? "input-enabled" :"input-disabled"}
                        value={this.state.currentText}
                        onChange={this.handleChange.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onFocus={this.handleFocus.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default Entry
