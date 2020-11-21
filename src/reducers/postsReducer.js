// two args always pass in exact same order
// Reducer should always return some values from two args - state & action

// first arg is the DEFAULT value instead of returning - undefined
// In many cases, first arg 'state' is default to empty array - [], empty string or null
// On second render, reducer must only use Previous state (data)

// Second arg is our Action object
// This reducer processes list of posts fetched with api, 
// so state is default to empty array for post list
export default (state=[], action) => {
//   if (action.type === 'fetch_posts') {
//     return action.paload
//   }
//  return state;
  
  // same as above but common way is to use Switch Statement
  switch (action.type) {
    case 'fetch_posts':
      return action.payload;

    default:
      return state;
  // case where not found correct action type
  // if we ever see an action that does not have type - fetch_posts,
  // we are just going to return Previous State, default state
  }
}
