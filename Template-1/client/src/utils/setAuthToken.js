import axios from 'axios';
// Adding Auth token to every request if user is logged in
const setAuthToken = token => {
  if(token) {
    // apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    console.log('before delete: '+axios.defaults.headers.common['Authorization']);
    delete axios.defaults.headers.common['Authorization'];
    console.log('after delete: '+axios.defaults.headers.common['Authorization']);
  }
}

export default setAuthToken;
