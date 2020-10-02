import React from 'react';
import ReactDOM from 'react-dom';

// Using other function from Redux - createStore ()
// to put all Reducers into the Redux Store object / Global State object
import { createStore } from 'redux';

// provider component
import { Provider } from 'react-redux';
import reducers from './reducers';

import App from './components/App';

// Wrap the App component with the Provider component.
// pass in a single prop - store which takes in all the reducers
// STORE is the collections of different Reducers & global state object.
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
// Provider component connects to Redux Store.
// Instance of Connect component connects to the Provider component
// to access data in Redux Store.