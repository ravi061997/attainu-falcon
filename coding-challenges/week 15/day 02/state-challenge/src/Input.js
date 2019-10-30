import React from "react";

class Input extends React.Component {

    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.props.updateInput(event.state.value);
    }

    render(){
        return(
            <input onChange = {this.handleInput} className = "form-control"/>
        );
    }
}

export default Input;