import axios from 'axios';
// Adding Auth token to every request if user is logged in
const setAuthToken = token => {
  if(token) {
    // apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;
