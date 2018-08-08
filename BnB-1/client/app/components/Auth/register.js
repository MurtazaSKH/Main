import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/userActions';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log('register form submitted');
    this.props.registerUser(userData);
  }
  render() {
    return (
      <div>
        <section className="account-page login-page register-page">
          <div className="container">
            <h3 className="register-page-heading text-center">Sign Up</h3>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <form className="register-form" onSubmit={this.onSubmit}>
                {/* <h5 className="register-heading text-center">Please Fill the Form {
                  (signUpError)
                    ? (<div> {signUpError}</div>)
                    : (null)
                }</h5> */}
                <div className="form-group">
                  <input type="text" className="form-control" name="name"  placeholder="Enter Your Name" value={this.state.name} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control"  placeholder="Enter Your Email" name="email" value={this.state.email} onChange={this.onChange} />
                </div>
                {/* <div className="form-group">
                  <input type="text" className="form-control" name="phone" placeholder="Enter Your Phone Number" value={this.state.phone} onChange={this.onChange} />
                </div> */}
                <div className="form-group">
                  <input type="password" className="form-control" name="password" value={this.state.password}
                onChange={this.onChange} placeholder="Enter Your Password"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password2" value={this.state.password2}
                onChange={this.onChange} placeholder="Repeat Your Password"/>
                </div>
                <button type="Submit" className="btn btn-default">Register</button>
                <div className="login-text">
                  <div className="row">
                    <div className="col-xs-6">
                      <a href="forget-password.html" title="Forgot Password?">Forgot Password?</a>
                    </div>
                    <div className="col-xs-6 text-right">
                      {/* <a href="#" title="Register With Us" >Have An Account?</a> */}
                      <Link to="/login">Have An Account?</Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" title="Login With Facebook" className="btn social-login fb-login"><i className="fa fa-facebook fa-lg"></i>Login with facebook</a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" title="Login With Google" className="btn social-login google-login"><i className="fa fa-google-plus fa-lg"></i>login with google</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  userAuth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps =(state) => ({
  userAuth: state.userAuth,
  errors: state.errors
})


export default connect(mapStateToProps,{registerUser})(Register);
