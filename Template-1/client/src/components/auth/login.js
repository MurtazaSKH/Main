import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import classnames from 'classnames';

class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit (e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps (nextProps) {
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors});
    }
  }

  render() {
    const {errors} = this.state;

    return(
      <div>
        <h1>Login</h1>
        <Link to="/">Home</Link>
        <form onSubmit={this.onSubmit}>
          <input type="text" name='email' value={this.state.email} onChange={this.onChange}/>
          {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          <br/>
          <input type="password" name='password' value={this.state.password} onChange={this.onChange}/>
          {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          <br/>
          <button type="Submit">Submit</button>
        </form>

      </div>
    );
  }
}

Login.propTypes ={
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{loginUser})(Login);
