import React from 'react'
import ReactDOM from 'react-dom'

class InputField extends React.Component {
    render(){
        return (
            <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
        )
    }
}

class Password extends React.Component {
    render(){
        return (
            <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
        )
    }
}

class Button extends React.Component {
    render(){
        return(
            <button type="submit" class="btn btn-primary">Submit</button>
        )
    }
}

class Login extends  React.Component{
    render(){
        return(
            <div className = "container-fluid" style={{ marginTop:'5%'}}>
                <div className = "col-md-5 offset-md-4">
                    <InputField/>
                    <Password/>
                    <Button/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Login/>,document.getElementById("root"));