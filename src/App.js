import React from 'react';
import './App.css';
import { ClearButton } from './components/ClearButton'
import { Button } from './components/Button'
import { Input } from './components/Input'

class App extends React.Component {
  state = {
    input: ""
  }

  handleAddToInput = (val) => {
    this.setState({ input: this.state.input + val })
  }

  handleClear = () => {
    this.setState({ input: "" })
  }

  handleEquals = () => {
    this.setState({ input: eval(this.state.input) })
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="frame">
            <Input input={this.state.input}></Input>
            <div className="button-frame">

              <ClearButton handleClick={this.handleClear}>Clear</ClearButton>

              <Button handleClick={this.handleAddToInput}>/</Button>
              <Button handleClick={this.handleAddToInput}>7</Button>
              <Button handleClick={this.handleAddToInput}>8</Button>
              <Button handleClick={this.handleAddToInput}>9</Button>
              <Button handleClick={this.handleAddToInput}>-</Button>
              <Button handleClick={this.handleAddToInput}>4</Button>
              <Button handleClick={this.handleAddToInput}>5</Button>
              <Button handleClick={this.handleAddToInput}>6</Button>
              <Button handleClick={this.handleAddToInput}>+</Button>
              <Button handleClick={this.handleAddToInput}>1</Button>
              <Button handleClick={this.handleAddToInput}>2</Button>
              <Button handleClick={this.handleAddToInput}>3</Button>

              <Button handleClick={this.handleEquals}>=</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// const Input = (props) => {
//   return (
//       <div className="input">{props.input}</div>
//   )
// }


// const Button = (props) => {
//   return (
//       <div className="button" onClick={() => props.handleClick(props.children)}>
//           {props.children}
//       </div>
//   )
// }

// const ClearButton = (props) => {
//   return (
//       <div className="clear-btn" onClick={props.handleClear}>{props.children}</div>
//   )
// }




export default App;




