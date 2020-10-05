import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action creator 
import { fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {

  componentDidMount() {
    // this.props.fetchPosts()
    this.props.fetchPostsAndUsers()
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>

            <UserHeader userId={post.userId}/>
          </div>
        </div>
      )
    })
  }
  render () {
    // console.log('render');
    return (
      <div className="ui relaxed divided list">
        { this.renderList() }
      </div>
    )
  }
}

// mapStateToProps function passes global state data from Redux Store into react components 
// in order to do so, pass mapStateToProps to Connect function
// mapStateToProps, meaning - pass in the data store in Redux Store to this component as PROPS
const mapStateToProps = (state) => { // call with our entire global state object in Redux Store
  // state.posts is from combineReducers where we assigned our reducer to posts key
  // Inside state, posts key holds all the data from api, now 
  // assigning posts key to a new object key - key/value 
  // we are going to return New object with property posts as PROPS pass onto this react component
  return { posts: state.posts}
}

// Even though if there's no state/data, still need to pass in first arg to the connect func
// first arg is always mapStateToProps func, pass null instead if no state/data
// Second arg is the Action Creator object

// passing mapStateToProps as a first arg
export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);
// To access to the provider, use connect() & wrap the component with ()
// Instance of Connect component connects to the Provider component to access Redux store
// Connect component handles Action Creators which is pass as props into this react component