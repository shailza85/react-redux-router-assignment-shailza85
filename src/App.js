import React from 'react';

import { connect } from 'react-redux';

import addToPastCalculations from './actions/HistoryActions';

class App extends React.Component { 
  //The constructor() method is automatically called when an object is created, and gives us chance to do any initialization work required to make the object useful. This only gets called once for each object, and you never call it directly.
  constructor(props) {  //constructor() takes the component's props as its only input parameter. 
    //The super() method is a special method that means "call this same method on whichever class I inherited from."
    super(props);  
   // this.state to be a value containing a input1,input2, result and operator value.
   //setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.


    this.state = {
      input1: "", //Keep track of our new value.
      input2: "",
      result: "",

      selectValue: ""


    };
  }

  inputValue1 = (event) => {
    this.setState({
      input1: Number(this.state.input1)
    });

  };

  updateItem(key, value) {
    this.setState({ [key]: value }); //this referes to instance of object from class.
        // We never re-assign the contents of this.state.
    // this.state is ONLY USED FOR READING VALUES, NOT writing.
    // When we need to update anything in state, we need to use this.setState()
    // this.setState() triggers the render() method, so we can see updated state info in our presentation.
  }

  inputValue2 = (event) => {
    this.setState({
      input2: Number(this.state.input2)
    })

  };
  SelValue = (event) => {
    this.setState({ value: event.target.value });
  }

//Event on click of button
  calcValue = (event) => {
    event.preventDefault();  //Prevents default page load
    const { input1, input2, selectValue } = this.state;

    let tempResult;   //temporary variable to store result 

    //Switch statement to check the operators selected by user
    switch (this.state.value) {
      case "+":
        tempResult = parseInt(this.state.input1) + parseInt(this.state.input2);
        this.setState({
          result: tempResult,
        });
        break;
      case "-":
        tempResult = parseInt(this.state.input1) - parseInt(this.state.input2);
        this.setState({
          result: tempResult,
        });
        break;
      case "*":
        tempResult = parseInt(this.state.input1) * parseInt(this.state.input2);
        this.setState({
          result: tempResult,
        });
        break;
      case "/":
        tempResult = parseInt(this.state.input1) / parseInt(this.state.input2);
        this.setState({
          result: tempResult,
        });
        break;
      default:
        this.setState({
          result: " Please select Operation",
        });
        break;
    }

 // Dispatch an action to display the values
    this.props.dispatch(addToPastCalculations(`${this.state.input1} ${this.state.value} ${this.state.input2} = ${tempResult}`));
  }



  render() {


    return (
 //<></>: “root” DOM node because everything inside it will be managed by React DOM

 //Calculator form:
      <>  
    
        <h1>Welcome to my Calculator!</h1>    
        
        <form>
          <label htmlFor="input1">
            Input 1:
          <input type="text" name="input1"
              id="input1" value={this.state.input1}
              onChange={event => this.updateItem('input1', event.target.value)}
            />
          </label><br />

          <label htmlFor="select1">
            Operation:
          <select id="dropdown" onChange={this.SelValue} value={this.state.value} name="select1" >
              <option value="Select Operator">Select Operator</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label><br />

          <label htmlFor="input2">
            Input 2:
          <input type="text" name="input2"
              id="input2"
              value={this.state.input2} onChange={event => this.updateItem('input2', event.target.value)} />
          </label><br />
          <input type="submit" value="Calculate!" onClick={this.calcValue} />
        </form>

        <h2>Result: {this.state.result}</h2>

      </>
    );

  }
}
export default connect(
  state => { return { tempResult: state } },

)
  (App);   //Name of the component(i.e App)

 //@link https://codesandbox.io/s/j4yk1vy079?file=/src/index.js:941-1001: How to set value of <select> dropdown onChange.

 //@link https://reactjs.org/docs/getting-started.html
//Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

 //@link https://reactjs.org/docs/faq-state.html

 //@link http://www.hackingwithreact.com/read/1/10/state-vs-props-in-react

 //When you use any React component you can pass it some input data that you want it to work with. These properties are called "props" and are read-only values that define the basic starting point for a component.

 //render() { starts the render() method of our component. This is called by React when the component needs to be drawn to the screen, and needs to return something that can be drawn in the browser.

 // The "export" keyword means this component is being exposed to the rest of our app to use, and "default" means it's the only thing this class will expose.

