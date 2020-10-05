/* eslint-disable no-unused-vars */
// lodash library 
import _ from 'lodash';

// api data
import jsonPlaceholder from '../api/jsonPlaceholder';

// this is Action creator file inside actions directory
// Action Creator function returns JS objects

// Type is required, payload property is optional
// here, export in the beginning is the Named export, 
// that's why no default export, helps when there are many functions here

// To have Asynchronous action creators inside Redux application,
// we have to use middleware like Redux Thunk
// Middleware is Function that gets called with every action with dispatch. 
// Middleware has the ability to STOP, MODIFY & mess around with actions
// Popular use of middleware is for dealing with async actions. 
// We are going to use a Redux Thunk to solve our async issues. 
export const fetchPosts = () => {
  return async function(dispatch, getState) {
    // request to post endpoint 
    // now with redux thunk, we can use async/await syntax to
    // make our action creator - Asynchronous
    const response = await jsonPlaceholder.get('/posts')
    
    // now with the help of redux thunk, our action creators can return action objects or functions
    // if function, we can use its dispatch method to dispatch our function to the reducers in redux store
    dispatch({ type: 'fetch_posts', payload: response.data })  // name & data
    // console.log(response.data)
  }
}

// fetchUser action creator with arg - id
// same as above function returning function
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  
  dispatch({ type: 'fetch_user', payload: response.data })
};

// using lodash memoization to avoid multiple over fetching api requests
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// alternate approach for above
// calling action creator from an action creator
// fetchPostsAndUsers action creator to avoid over-fetching api requests
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // manually dispatching action creator function, handled by redux thunk
  await dispatch(fetchPosts()) // calling fetchPosts action creator to fetch post data
  
  // after fetching data & processed by reducers, we can call getState func to access 
  // posts property that should have all the post data
  // getState func exists in the redux store that gives us access to all the data inside Redux store
  // console.log(getState().posts)

  // using lodash map function to pull of user id property & find unique user ids
  // 'userId' - second arg
  // now mapping through an array of all different users ids only
  // _.uniq is going to just return array of unique ids
  const userIds = _.uniq(_.map(getState().posts, 'userId'))

  // going to loop over different users ids 
  userIds.forEach(id => dispatch(fetchUser(id)))
}

// NOTE: Synchronous Action creator is not returning plain JS objects because of Async Await syntax &
// not working as expected, what gets return is a Request Object - get('/posts') which
// has no Type & Payload properties, so,
// we are not dispatching Redux Action object, we are dispatching random object that
// Redux don't care about.

// Second problem: not using Async Await syntax but with Promise
// which takes some amount of time to complete that get request. 
// Without Async Await syntax, we don't get some data back but instead,
// we get Promise object to get access to our data at some point in the future
// NOTE: It's not going to work using Promise either, by the time our action gets to a reducer,
// we won't have fetched our data because Promise takes some time to return a value.

// The biggest difference between promises and async/await is that 
// the Await expression causes async function execution to pause until a promise is settled/full filled
// but with Promise, Promise object don't await & starts execution of other code, promising value in future
