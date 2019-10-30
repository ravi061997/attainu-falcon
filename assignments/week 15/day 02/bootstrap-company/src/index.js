import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    heading:{
        marginTop:'5%'
        
    },
    debug: {
        borderStyle:'solid',
        borderWidth:'5px'
    },
    image: {
        'height':'150px',
        'width':'150px',
        
    }

}

class Header extends React.Component {
    render(){
        return(
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact-us">Contact Us</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <Route path ="/" exact="true"  component={Home}/>
                <Route path ="/about-us"  exact = "true" component={AboutUsPage}/>
                <Route path ="/contact-us"  exact = "true" component={ContactUsPage}/>
            </Router>

        )
    }
}

class Heading extends React.Component {
    render(){
        return(
            <div className= "col md-4 offset-md-4" style={style.heading}> 
              <h1><u>AwesomeCompany.com </u></h1>
            </div>    
        )
    }
}
class Feature extends React.Component{
    render(){
        return(
            <div className= "row align-item-center">
                <div className= "col =-md-3" >
                    <h2>Feature#1</h2>
                    <hr></hr>
                    <p>some text here</p>
                </div>
                <div className= "col =-md-3">
                    <h2>Feature#2</h2>
                    <hr></hr>
                    <p>some text here</p>
                </div>
                <div className= "col =-md-3">
                    <h2>Feature#3</h2>
                    <hr></hr>
                    <p>some text here</p>
                </div>
                <div className= "col =-md-3">
                    <h2>Feature#4</h2>
                    <hr></hr>
                    <p>some text here</p>
                </div>
            </div>
        )
    }
}

class Home extends React.Component {
    render(){
        return(
            <div>
                <Heading/>
                <Feature/>
            </div>
        )
    }
}

class AboutUsPage extends React.Component {
    render(){
        return(
            <div className = "container-fluid">
                <div className = "col-md-4 offset-md-4">
                    <h1>About Us</h1>
                    <hr></hr>
                </div>
                <div className ="col-md-8 offset-md-2">
                    <div className="row justify-content-around">
                        <div className="col-md-3">
                            <h2>CEO</h2>
                            <p>some text about ceo</p> 
                        </div>
                        <div className = "col-md-3">
                            <div style={{width:'18rem'}}>
                                <img src = "https://images.livemint.com/img/2019/04/17/600x338/Balesh-Sharma_1555378022181_1555508817135.jpg" class="card-img-top" alt="....." ></img>
                                <div class = "card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="col-md-8 offset-md-2">
                    <div className="row justify-content-around">
                        <div className="col-md-3">
                            <h2>CTO</h2>
                            <p>some text about CTO</p> 
                        </div>
                        <div className = "col-md-3">
                            <div  style={{width:'18rem'}}>
                                <img src = "https://www.computing.co.uk/w-images/2707deda-8614-458a-a9a1-1c1f21ccfc91/0/paulellerbeckeasypropertyctoimg4528-580x358.jpg" class="card-img-top" alt="....."></img>
                                <div class = "card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="col-md-8 offset-md-2">
                    <div className="row justify-content-around">
                        <div className="col-md-3">
                            <h2>COO</h2>
                            <p>some text about COO</p> 
                        </div>
                        <div className = "col-md-3">
                            <div  style={{width:'18rem'}}>
                                <img src = "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="card-img-top" alt="....."></img>
                                <div class = "card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ContactUsPage extends React.Component {
    render(){
        return(
            <div className= "container-fluid" style={{marginTop:'5%'}}>
                <div className = "col-md-4 offset-md-4">
                    <h1>Contact Us</h1>
                    <hr></hr>
                    <p>embed map </p>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=" width="600" height="450" frameborder="0"  allowfullscreen style={{marginRight: "spacing + 'em' "}}></iframe>
                </div>
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return(
                <div>
                    <Header/>
                </div>

        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));

