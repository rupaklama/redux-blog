export default (state=[], action) => {
  switch(action.type) {
    case 'fetch_user':
      return [...state, action.payload]
    default:
      return state;
  }
};