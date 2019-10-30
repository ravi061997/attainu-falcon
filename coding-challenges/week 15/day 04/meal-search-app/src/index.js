import React from 'react'
import ReactDOM from "react-dom"
import Search from "./Search.js"

class App extends React.Component{

    render() {
        return(
          <div className = "app">
              <Search/>
          </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));