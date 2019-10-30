import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            number1: 0,
            number2: 0,
            result: 0
        }
        this.onChangeNumberOne = this.onChangeNumberOne.bind(this);
        this.onChangeNumberTwo = this.onChangeNumberTwo.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
    }
    onChangeNumberOne(event){
        this.setState({
            number1:parseInt(event.target.value)
        },()=>{
            console.log(this.state.number1)
        }
        )
    }
    onChangeNumberTwo(event){
        this.setState({
            number2:parseInt(event.target.value)
        })
    }
    add(){
        let num1 = this.state.number1;
        let num2 = this.state.number2;
        let result = num1 + num2;
        this.setState({
            result:result
        })
    }
    subtract(){
        let num1 = this.state.number1;
        let num2 = this.state.number2;
        let result = num1 - num2;
        this.setState({
            result:result
        }) 
    }
    multiply(){
        let num1 = this.state.number1;
        let num2 = this.state.number2;
        let result = num1 * num2;
        this.setState({
            result:result
        })  
    }
    divide(){
        let num1 = this.state.number1;
        let num2 = this.state.number2;
        let result = num1 / num2;
        this.setState({
            result:result
        })
    }

    render(){
        return (
            <div className = "container" style={{marginTop: '5%'}}>
               <div className="row">
                    <div className = "col-md-4 offset-md-4" style = {{backgroundColor:"yellowgreen"}}>
                        <h2>Calculator</h2>
                        <input type = "number" className = "form-control" onChange = {this.onChangeNumberOne} /><br></br>
                        <input type = "number" className = "form-control"  onChange = {this.onChangeNumberTwo} /><br></br>
                        <div className = "row justify-content-around">
                            <button onClick={this.add}>+</button>
                            <button onClick={this.subtract}>-</button>
                            <button onClick={this.multiply}>*</button>
                            <button onClick={this.divide}>/</button>
                        </div>
                        <h1>Result:{this.state.result}</h1>
                    </div>
               </div>
            </div>
        )
    }
}
ReactDOM.render(<Calculator />,document.getElementById("root"))