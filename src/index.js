import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom';

//Components
import './index.css';
import Nav from './Nav';
import App from './App';
import PastCalculations from './PastCalculations';

//Redux
import displayNumberReducer from './displayNumbersReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


/**
 * Redux Store
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */
const store = createStore( displayNumberReducer );

// Attempt to output, see if we're getting an error.
store.subscribe( () => console.log( store.getState() ) ); // Outputs each time a change occurs (subcribe watches for changes.)


// Set up a "root" for our Router. A function for provider.
const Root = store => (
  <Provider store={store.store}>
    <Router>
      <Nav />
      <Route path="/" component={App} exact/>
      <Route path="/PastCalculations" component={PastCalculations} />
    </Router>
  </Provider>
);


// Render the route-enabled configuration.
ReactDOM.render(
  <Root store={store} />,
  document.getElementById( 'root' )
);



/**@link http://www.hackingwithreact.com/read/1/4/importing-react-components-using-es6
import ReactDOM from 'react-dom' is new, and imports the React tools required to render to the DOM – that's the name used for the document structure used to describe web pages and other similar documents.

ReactDOM.render() is what kicks off the rendering of our entire app, and it takes two parameters: some JSX to render and where to render it to.
*/


