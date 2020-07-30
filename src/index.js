import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import displayNumbers from './displayNumbers';

import Nav from './Nav';
import App from './App';
import About from './PastCalculations';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import PastCalculations from './PastCalculations';


/**
 * Redux Store
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */
const store = createStore( displayNumbers );

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
      <Route path="/pastcalculations" component={PastCalculations} />
    </Router>
  </Provider>
);

// Prop types required.
Root.propTypes = {
  store: PropTypes.object.isRequired
};

// Render the route-enabled configuration.
render(
  <Root store={store} />,
  document.getElementById( 'root' )
);


