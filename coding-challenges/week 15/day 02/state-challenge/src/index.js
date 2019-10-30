import React from 'react';
import ReactDOM from 'react-dom';
import Input from "./Input.js";
import Display from "./Display.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: null
        }
        this.updateInput = this.updateInput.bind(this);
        }

        updateInput(input){
            this.setState({input:input});
    }

    render(){
        return(
            <main className = "container m-5">
                <h1>React State Challenge</h1>
                <hr/>
                <input updateInput = {this.updateInput}/>
                <hr/>
                <Display input={this.state.input}/>
                <hr/>
            </main>

        )
    }

}
ReactDOM.render(<App/>,document.getElementById("root"));