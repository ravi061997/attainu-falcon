class SimpleTimer extends React.Component {
    constructor(props) {
      super(props)
      this.state = { seconds: 0 }
    }
  
    tick() {
      this.setState({
        seconds:this.state.seconds + 0.1
      })
    }
  
    componentDidMount() {
      console.log("componentDid Mount Called .....")
      let interval = setInterval(()=>{
        this.tick()
      },100)
    }
    render() {
        return(
            <div>
                Seconds:{this.state.seconds.toFixed(1)}
            </div>
        )
    }
}
ReactDom.render(<SimpleTimer/>,document.getElementById("app"));