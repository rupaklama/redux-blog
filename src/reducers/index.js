// redux library
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// Create separate Reducers files instead of putting all reducers in One file like here
// to manage application state & make it scalable. 

// Reducer - department, is a function which processes data.
// When Redux first boots up, it's going to run each of our Reducers exactly ONE time, so
// if our reducers don't return any values - undefined, this will cause an error

// All of above different Reducers put together with function - combineReducers() as an object
// to our Global State Object - Store
// export default will make this available to other files in this project
export default combineReducers({
  // dummy reducer when starting out for error message to go away
  // replaceMe: () => 'I am inside global state object - Store!'
  // passing each of our Reducers as key/value properties to create State Object in Redux Store
  post: postsReducer

});