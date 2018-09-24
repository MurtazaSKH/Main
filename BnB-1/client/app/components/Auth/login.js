import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/userActions';
import classnames from 'classnames';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  render() {

    const {errors} = this.props;
    return (
      <div>
        <section id="login" className="account-page login-page register-page">
          <div className="container">
            <h3 className="register-page-heading text-center">Login Now</h3>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <form className="register-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" name="email" className={classnames('form-control',{'error-input-border':errors.email})} placeholder="Enter Your Email" value={this.state.email} onChange={this.onChange} />
                  {errors.email && (<label className="text-center error-feedback">{errors.email}</label>)}
                </div>
                <div className="form-group">
                  <input type="password" name="password" className={classnames('form-control',{'error-input-border':errors.password})} value={this.state.password}
                    onChange={this.onChange} placeholder="Enter Your Password" />
                  {errors.password && (<label className="text-center error-feedback">{errors.password}</label>)}
                </div>
                <button type="Submit" className="btn btn-default">Login</button>
                <div className="login-text">
                  <div className="row">

                    <div className="col-xs-6 text-right" style={{ float: "right" }}>
                      <Link to="/register">Register Here!</Link>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  userAuth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  userAuth: state.userAuth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
