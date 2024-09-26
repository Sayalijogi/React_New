import React,{Component} from 'react';
import ReactDOM from "react-dom/client";

function App(){
  return (
    <div>
      <h1>Hello</h1>
      <ButtonClick></ButtonClick>
      <PropExample name="sayali" lastName="jogi"></PropExample>
      <MyClassComponent></MyClassComponent>
      <Counter></Counter>
    </div>
  )
}

function PropExample({name}) {
  return <h1>Hello my name is {name}</h1>
}

//Program 3

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count:0
    };
  }

  increment = () => {
    this.setState({
      count:this.state.count + 1
    })
  };

  decrement = () => {
    this.setState({
      count:this.state.count - 1
    })
  };

  render (){
    return (
      <>
        <h1>Counter</h1>
        <p>Counter:{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}


//Program 2 - class based component
class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hi this is called Class Based Component</h1>
      </div>
    )
  }
}

//Program 1  --example of event click
//apperence logic and data
function ButtonClick() {
  const handleClick = () => {
    alert("This is example of button is clicked")
  }
  return (
    <div>
      <h1>Click example</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);

