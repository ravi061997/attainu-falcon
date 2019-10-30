import React from 'react';
import {Navbar} from 'react-materialize';
import Main from './Main.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
    <Navbar right>
    </Navbar>
     <Main />   
      </div>
    );
  }
}

export default App;