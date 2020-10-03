// redux library
import { combineReducers } from 'redux';

// All of above different Reducers put together with function - combineReducers() as an object
// export default will make this available to other files in this project
export default combineReducers({
  // dummy reducer when starting out for error message to go away
  replaceMe: () => 'dummy reducer'
});