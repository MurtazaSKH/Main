import React from 'react';
import {Link} from 'react-router-dom';

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
     console.log(e.target.value);
     this.setState({[e.target.name]:e.target.value});
   }

   onSubmit(e) {
     e.preventDefault();
     console.log('form submitted');
   }

   render() {

     return (
       <div>
         <section id="login" className="account-page login-page register-page">
           <div className="container">
             <h3 className="register-page-heading text-center">Login Now</h3>
             <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
               <form className="register-form" onSubmit={this.onSubmit}>
                 <div className="form-group">
                   <input type="text" name="email" className="form-control"  placeholder="Enter Your Email" value={this.state.email} onChange={this.onChange} />
                 </div>
                 <div className="form-group">
                   <input type="password" name="password" className="form-control" value={this.state.password}
                 onChange={this.onChange} placeholder="Enter Your Password"/>
                 </div>
                 <button type="Submit" className="btn btn-default">Login</button>
                 <div className="login-text">
                   <div className="row">

                     <div className="col-xs-6 text-right" style={{float:"right"}}>
                       {/* <a href="#" title="Register With Us" onClick={this.changeForm}>Register Here!</a> */}
                       {/* Insert REACT link to Register */}
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

export default Login;
