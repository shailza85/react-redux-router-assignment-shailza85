import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import displayNumberReducer from './displayNumbersReducer';
import PastCalculations from './PastCalculations';

import Nav from './Nav';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route } from 'react-router-dom';



/**
 * Redux Store
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */
const store = createStore( displayNumberReducer );

// Attempt to output, see if we're getting an error.
store.subscribe( () => console.log( store.getState() ) ); // Outputs each time a change occurs (subcribe watches for changes.)

/**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from
 * our store/state data.
 */
//store.dispatch( addNewToDo( "Buy milk." ) );
//store.dispatch( addNewToDo( "Practice React." ) );
//store.dispatch( addNewToDo( "Practice Redux." ) );

// Set up a "root" for our Router.
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


