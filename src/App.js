import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    this.setState({ [key]: value }); //this referes to instance of object from class
  }

  inputValue2 = (event) => {
    this.setState({
      input2: Number(this.state.input2)
    })

  };


  calcValue = (event) => {
    event.preventDefault();
    const { input1, input2, selectValue,result } = this.state;
   
//if condition checks the selected option.
    if (selectValue === '+') {
      this.setState({ result: parseInt(input1) + parseInt(input2) })  //@link https://stackoverflow.com/questions/50479358/how-to-add-two-numbers-react-js How to convert string input  addition to number
      console.log(result);
    }
    else if (selectValue === '-') {
      this.setState({ result: parseInt(input1) - parseInt(input2) })
      console.log(result);

    }
    else if (selectValue === '*') {
      this.setState({ result: parseInt(input1) * parseInt(input2) })
      console.log(result);
    }
    else if (selectValue === '/') {
      this.setState({ result: parseInt(input1) / parseInt(input2) })
      console.log(result);
    }
    else {
      return null;
    }
  }

  render() {


    return (

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
          <select id="dropdown" onChange={(e) => this.setState({ selectValue: e.target.value })} name="select1" >
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
export default App;

 //@link https://codesandbox.io/s/j4yk1vy079?file=/src/index.js:941-1001: How to set value of <select> dropdown onChange.