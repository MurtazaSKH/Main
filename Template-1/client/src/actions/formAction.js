import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';


// temporary action will move to appropriate file
export const uploadImageFile = (imageData) => dispatch => {
  axios.post('/api/uploadImage',imageData)
  .then(res => console.log('axios post success'))
  .catch(err => console.log('axios post fail:'+err));
};
