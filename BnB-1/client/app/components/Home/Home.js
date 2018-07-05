import React, {Component} from 'react';
import 'whatwg-fetch';
import {setInStorage,getFromStorage} from '../../utils/storage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: ''
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
    // this.componentDidMount - this.componentDidMount(this);
  }

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
    const {signUpEmail, signUpPassword} = this.state;

    this.setState({isLoading: true});
    console.log(signUpPassword);
    fetch('/api/account/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json'},
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword}),
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

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError
    } = this.state;

    if (isLoading) {
      return (<div>
        <p>Loading...</p>
      </div>);
    }

    if (!token) {
      return (<div>
        <div>
          {
            (signInError)
              ? (<p>{signInError}</p>)
              : (null)
          }
          <p>Sign In</p>
          <input type="email" placeholder="email" value={signInEmail} onChange={this.onTextboxChangeSignInEmail}/>
          <br/>
          <input type="password" placeholder="Password" value={signInPassword} onChange={this.onTextboxChangeSignInPassword}/>
          <br/>
          <button onClick={this.onSignIn}>Sign in</button>
        </div>
        <br/>
        <br/>
        <div>
          {
            (signUpError)
              ? (<p>{signUpError}</p>)
              : (null)
          }
          <p>Sign Up</p>
          <input type="email" placeholder="Email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail}/>
          <br/>
          <input type="password" placeholder="Passworddd" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword}/>
          <br/>
          <button onClick={this.onSignUp}>Sign Up</button>
        </div>
      </div>);
    }
    return (<div>
      <p>Account</p>
      <button onClick={this.logout}>Logout</button>
    </div>);


  }

  onTextboxChangeSignInEmail(event) {
    this.setState({signInEmail: event.target.value});
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({signInPassword: event.target.value});
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({signUpEmail: event.target.value});
    // console.log(this.state.signUpEmail);
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState ({signUpPassword: event.target.value});
    // console.log(this.state.signUpPassword);
  }

}

export default Home;
