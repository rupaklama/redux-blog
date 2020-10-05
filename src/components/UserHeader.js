import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions/index';

class UserHeader extends Component {
  
  render() {
    // this will find a user we care about
    // const user = this.props.users.find(user => user.id === this.props.userId);

    // destructuring user prop which is pass on to this component from mapSateToProps
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="header">{user.name}</div>
    );
  }
}

// extracting Logic here
// ownProps - is the 'userId' props of above react component
const mapStateToProps = ( state, ownProps) => {
  return { user: state.users.find( user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
