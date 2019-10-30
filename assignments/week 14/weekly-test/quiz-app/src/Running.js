import React from 'react';
import {Collection,Row,Col,CardPanel,Button} from 'react-materialize';

class Running extends React.Component{
  constructor(props){
  	super(props);
    this.state={
      input:null,
      seconds:60,
      ques:1,
      score:0,
      isLoaded:false,
      items:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

    tick() {
        this.setState(state => ({
          seconds: state.seconds - 1
        }));
    }
  componentWillMount() {
    fetch("//raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/quiz.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
          });
        }
      )
      this.interval = setInterval(() => this.tick(), 1000);
  }

  handleChange(event){
    this.setState({
    input:event.target.value
    },()=>{
    console.log(this.state.answer)
    }
    )
  }

  handleClick(value){
      if(value==="true"){
        this.setState((prevState)=>{
          return {ques:prevState.ques+1,score:prevState.score+1};
        });
      }
      else{
          this.setState((prevState)=>
              {
                return {ques:prevState.ques+1};
              }
            )
          }
  }

  renderQuestions(){
      return(
              <div>
              <Collection header={this.state.items[this.state.ques-1]["question"]} >
                 {
                  this.state.items[this.state.ques-1]["answers"]} 
              </Collection>
              </div>
           
        )
  }
  renderFinish(){
    return(
            <div>
              <Row>
                  <Col s-12 m-2 offset-md-5 >
                      <h5 class="teal-text text-lighten-2">Score</h5>
                      <CardPanel className="teal lighten-2 black-text" title="Score">
                          <span class="header center white-text text-lighten-2">{this.state.score}</span>
                      </CardPanel>
                  </Col>
              </Row>
                 <Button waves='light' onClick={()=>this.props.handleState('running')}>Start Test Again</Button>
             </div>
      )
  }


  render(){

        const  len=this.state.items.length;
        console.log(len);
        if(this.state.isLoaded){
        return (
        <div className =  "container m-5">  
        <h3 class="header center teal-text text-lighten-2">React Quiz</h3>

        <Row>
        <Col s-12 m-2>
            <h5 class="teal-text text-lighten-2">Question</h5>
            <CardPanel className="teal lighten-2 black-text" title="Question">
            <span class="header center white-text text-lighten-2">{this.state.ques}</span>
            </CardPanel>
        </Col>
        <Col s-12 m-2 offset-md-8 >
            <h5 class="teal-text text-lighten-2">Score</h5>
            <CardPanel className="teal lighten-2 black-text" title="Score">
            <span class="header center white-text text-lighten-2">{this.state.score}</span>
            </CardPanel>
        </Col>
        </Row>

        {
            this.state.ques <= len ?this.renderQuestions():this.props.handleState('finished',this.state.score)
        }
        <input  type="text" onChange={this.handleChange} className = "form-control"  placeholder="Answer"/>
        <p></p>
        <button onClick= {this.handleClick} className = "btn btn-success">Submit</button>
        <br/>
        <Button waves='light' onClick={()=>this.props.handleState('start')}>Go to Main Page</Button>
        <br/>
        {this.state.seconds}
        <h3>Seconds Reamining</h3>
        <h3>{this.state.result}</h3>
        </div>
    )
   }

   else{
    return <div></div>
   }	
  }
}

export default Running;