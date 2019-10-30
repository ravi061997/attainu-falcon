import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorldComponent extends React.Component {
    render(){
        return (
            <button className =" mt-5 ml-3 mr-3 btn btn-success" >
                HelloWorld Component
            </button>
        )
    }
}
ReactDOM.render(<HelloWorldComponent/>,document.getElementById("root"))