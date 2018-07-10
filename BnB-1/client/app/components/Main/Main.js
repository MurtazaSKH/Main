import React, {Component} from 'react';
import 'whatwg-fetch';
import {setInStorage,getFromStorage} from '../../utils/storage';

class Main extends Component {
  constructor (props) {
    super(props);

    // Note to self: review states
    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpName: '',
      signUpPhone: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpPasswordRepeat: '',
      showSignUp: false
    };


    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpName = this.onTextboxChangeSignUpName.bind(this);
    this.onTextboxChangeSignUpPhone = this.onTextboxChangeSignUpPhone.bind(this);
    // this.onTextboxChangeSignUpPasswordRepeat = this.onTextboxChangeSignUpPasswordRepeat.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
    // Toggle statee to show signup or signIn form
    this.changeForm = this.changeForm.bind(this);

  }
  // constructor ends
  componentDidMount() {
    // this.setState({isLoading: false});
    console.log('componentMounted');
    const obj = getFromStorage('the_main_app');
    if(obj && obj.token) {
      const {token} = obj;
      fetch ('/api/account/verify?token='+token)
      .then(res=>res.json())
      .then(json => {
        if(json.success) {
          this.setState ({
            token,
            isLoading: false
          });
          console.log('token: ',this.state.token);
        }
        else {
          this.setState ({
            isLoading: false
          });
          console.log('token: ',this.state.token);
        }
      });
    } else {
      this.setState ({
        isLoading: false
      });
    }
  }

  onSignUp() {
    const {signUpEmail, signUpName, signUpPassword,signUpPhone} = this.state;

    this.setState({isLoading: true});
    console.log(signUpName);
    fetch('/api/account/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json'},
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
        name:signUpName,
        phone: signUpPhone}),
    })
    .then(res => res.json())
    .then(json=> {
      // console.log('json', json);
      if (json.success) {
        this.setState({signUpError: json.message, isLoading: false, signUpEmail: '', signUpPassword: ''});
      } else {
        this.setState({signUpError: json.message, isLoading: false})
      }
    });
  }

  onSignIn() {
    const {signInEmail,signInPassword} = this.state;

    this.setState({
      isLoading: true
    });

    fetch ('/api/account/signin',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify ({
        email: signInEmail,
        password: signInPassword
      }),
    })
    .then (res => res.json())
    .then(json=> {
      console.log('json',json);
      if(json.success) {
        setInStorage ('the_main_app', {token:json.token});
        this.setState ({
          signInError: json.message,
          isLoading: false,
          signInPassword: '',
          signInEmail: '',
          token: json.token
        });
      }
      else {
        this.setState({
          signInError: json.message,
          isLoading: false
        });
      }
    });
  }

  logout () {
    this.setState ({
      isLoading: true
    });
    const obj = getFromStorage ('the_main_app');
    if(obj && obj.token) {
      const {token} =obj;

      fetch ('/api/account/logout?token='+token)
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          console.log('logged out!')
          this.setState ({
            token: '',
            isLoading: false
          });
        } else {
          this.setState ({
            isLoading: false
          });
        }
      });
    } else {
      this.setState ({
        isLoading: false
      });
    }
  }

  // render starts
  render () {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpName,
      signUpPhone,
      signUpPassword,
      signUpError
    } = this.state;

    if (isLoading) {
      return (<div>
        <p>Loading...</p>
      </div>);
    }

    if(!token){
      // console.log(this.state.showSignUp);
      if(!this.state.showSignUp) {
        // Login Form
        return (
          <div>
            <section id="login" className="account-page login-page register-page">
              <div className="container">
                <h3 className="register-page-heading text-center">Login Now</h3>
                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                  <form className="register-form">
                    <h5 className="register-heading text-center">Proceed To Login {
                      (signInError)
                        ? (<div> {signInError}</div>)
                        : (null)
                    }</h5>
                    <div className="form-group">
                      <input type="text" className="form-control"  placeholder="Enter Your Email" value={signInEmail} onChange={this.onTextboxChangeSignInEmail} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" value={signInPassword}
                    onChange={this.onTextboxChangeSignInPassword} placeholder="Enter Your Password"/>
                    </div>
                    <button onClick={this.onSignIn} className="btn btn-default">Login</button>
                    <div className="login-text">
                      <div className="row">

                        <div className="col-xs-6 text-right" style={{float:"right"}}>
                          <a href="#" title="Register With Us" onClick={this.changeForm}>Register Here!</a>
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
        )
      } else {
        // Sign Up Form
        return (<div>
          <section className="account-page login-page register-page">
            <div className="container">
              <h3 className="register-page-heading text-center">Sign Up</h3>
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="register-form" onSubmit={this.onSignUp}>
                  <h5 className="register-heading text-center">Please Fill the Form {
                    (signUpError)
                      ? (<div> {signUpError}</div>)
                      : (null)
                  }</h5>
                  <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Enter Your Name" value={signUpName} onChange={this.onTextboxChangeSignUpName} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Enter Your Email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Enter Your Phone Number" value={signUpPhone} onChange={this.onTextboxChangeSignUpPhone} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" value={signUpPassword}
                  onChange={this.onTextboxChangeSignUpPassword} placeholder="Enter Your Password"/>
                  </div>
                  <button onClick={this.onSignUp} className="btn btn-default">Register</button>
                  <div className="login-text">
                    <div className="row">
                      <div className="col-xs-6">
                        <a href="forget-password.html" title="Forgot Password?">Forgot Password?</a>
                      </div>
                      <div className="col-xs-6 text-right">
                        <a href="#" title="Register With Us" onClick={this.changeForm}>Have An Account?</a>
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
                </div>
              </div>
            </div>
          </section>
        </div>);
      }
    }
    return (<div><p>rest of the app and components</p> <button onClick={this.logout} className="btn btn-default">Logout</button> </div>);
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({signInEmail: event.target.value});
    // console.log(this.state.signInEmail);
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({signInPassword: event.target.value});
    // console.log(this.state.signInPassword);
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({signUpEmail: event.target.value});
    // console.log(this.state.signUpEmail);
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState ({signUpPassword: event.target.value});
    // console.log(this.state.signUpPassword);
  }

  // onTextboxChangeSignUpPasswordRepeat(event) {
  //   this.setState ({signUpPasswordRepeat: event.target.value});
  //   // console.log(this.state.signUpPassword);
  //   if(!(this.state.signUpPassword==this.state.signUpPasswordRepeat)) {
  //     this.setState({
  //       signUpError: "Passwords do not match!"
  //     });
  //   }
  // }

  onTextboxChangeSignUpName(event) {
    this.setState ({signUpName: event.target.value});
    // console.log(this.state.signUpPassword);
  }

  onTextboxChangeSignUpPhone(event) {
    this.setState ({signUpPhone: event.target.value});
    // console.log(this.state.signUpPassword);
  }

  changeForm(event) {
    // To prevent screen from moving to top
    event.preventDefault();
    this.setState (prevState => ({
      showSignUp: !prevState.showSignUp
    }),() => {
      console.log(this.state.showSignUp);
    });
  }
}

export default Main;
