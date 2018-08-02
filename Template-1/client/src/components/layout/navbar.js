import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';

class Navbar extends React.Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <h2><a href="" onClick={this.onLogout.bind(this)}>Logout</a></h2>
    );
    const guestLinks = (
      <h2><Link to="/login">Login</Link>-<Link to="/register">Register</Link></h2>
    );
    return (
      <div>
        <h1>Navbar</h1>
      {isAuthenticated?authLinks:guestLinks}
      </div>
    );
  }
}


Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{logoutUser})(Navbar);
