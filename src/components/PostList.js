import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action creator 
import { fetchPosts } from '../actions';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  render () {
    return (
      <div>
        Post List
      </div>
    )
  }
}

// Even though if there's no state/data, still need to pass in first arg to the connect func
// first arg is always mapStateToProps func, pass null instead if no state/data
// Second arg is the Action Creator object
export default connect(null, { fetchPosts: fetchPosts })(PostList);
// To access to the provider, use connect() & wrap the component with ()
// Instance of Connect component connects to the Provider component to access Redux store
// Connect component handles Action Creators which are pass as props into the react component