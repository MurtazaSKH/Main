import React from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

class Register extends React.Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChange (e) {
    this.setState({[e.target.name]:e.target.value});
  }
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors:nextProps.errors
      });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser= {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser,this.props.history);
    // axios.post('/api/users/register',newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({errors:err.response.data}));
    // console.log(newUser);
  }

  render() {
    const {errors} = this.state;
    // const {user} = this.props.auth;
    return(
      <div>
        <h1>Register</h1>
        {/* {user?user.name: ''} */}
        <Link to="/">Home</Link>
        <form onSubmit={this.onSubmit}>
          <input type="text" name='name' value={this.state.name} onChange={this.onChange}/>
          {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
          <br/>
          <input className={classnames('default','is-invalid':errors.email)} type="text" name='email' value={this.state.email} onChange={this.onChange}/>
          {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          <br/>
          <input type="password" name='password' value={this.state.password} onChange={this.onChange}/>
          <br/>
          <input type="password" name='password2' value={this.state.password2} onChange={this.onChange}/>
          <button type="Submit">Submit</button>
        </form>

      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors:state.errors
});

export default connect(mapStateToProps,{registerUser})(withRouter(Register));
