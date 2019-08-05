
import React,{Component} from 'react';


class App extends Component{
  state={
    name:'Nishant'
  }
  handleclick=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  render(){
    return (
    <div className="App">
      <h1>hello {this.state.name},you are learning react</h1>
      <form>
        <input type="text" onChange={this.handleclick}  value={this.state.name}/>
      </form>
    </div>
  );
    }
}

export default App;
