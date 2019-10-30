import React from "react";
import ReactDOM from "react-dom";
import TweetContainer from "./components/TweetContainer";

import "./styles.css";

class App extends React.Component {
    render() {
        return (
        <div className="App">
            <h1>Twitter App</h1>
            <TweetContainer />
        </div>
        );
    }
}

 
ReactDOM.render(<App />,document.getElementById("root"));
