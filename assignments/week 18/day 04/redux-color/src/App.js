import React from 'react';
import Input from './components/Input.js';
import SquareButton from './components/SquareButton.js';
import CubeButton from './components/CubeButton.js';
import SquareRootButton from './components/SquareRootButton.js';
import Display from './components/Display.js'
import {Provider} from 'react-redux';
import {store} from './store.js';
import RedButton from './components/RedButton.js';
import GreenButton from './components/GreenButton.js';
import BlueButton from './components/BlueButton.js';

class App extends React.Component {
    render() {
        return (
            <Provider store ={store}>
                <div className = "container-fluid" style ={{marginTop: "5%"}}>
                    <div className="row">
                        <div className = "col-md-6 offset-md-3">
                            <Input />
                            <div className = "row justify-content-around " style ={{marginTop: "5%"}} >
                                <SquareButton />
                                <CubeButton />
                                <SquareRootButton />
                            </div>
                            <div className = "row justify-content-around" style={{marginTop:"5%"}}>
                                <RedButton />
                                <GreenButton />
                                <BlueButton />

                            </div>
                            <div className = "container-fluid" style ={{marginTop: "5%"}}>
                                <Display />
                            </div>
                        </div>

                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;