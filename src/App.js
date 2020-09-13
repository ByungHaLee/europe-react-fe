import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      todo: ""
    };
  }
  addTodo() {
    if(this.state.todo)
      this.setState({list:[...this.state.list, this.state.todo]})
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={e=>this.setState({todo:e.target.value})}/>
          <button onClick={()=>this.addTodo()}>add</button>
        </div>
        {this.state.list.map(todo=><li>{todo}</li>)}
      </div>
    );
  }
}

export default App;
