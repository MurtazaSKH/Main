import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {Router,  Route, Link, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import store from './store.js';
import {setCurrentUser} from './actions/userActions';
import {getCart} from './actions/cartActions';
import history from './utils/history';
import setAuthToken from './utils/setAuthToken';
// Component Files
import App from './components/Main/App';
import Main from './components/Main/Main';
import NotFound from './components/Main/NotFound';
import AllProducts from './components/Products/AllProducts';
import AddProduct from './components/Products/AddProduct';
import Login from './components/Auth/login';
import Register from './components/Auth/register';

import './styles/styles.scss';

// Check for token if user revisits/reloads page
if(localStorage.jwtToken) {
  // Get User details
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Get Cart
  // if(localStorage.cart)
    store.dispatch(getCart(decoded.id));
}


render((
  <Provider store={store}>
    <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Main}/>

            <Route exact path="/Products" component={AllProducts}/>
            <Route exact path="/AddProduct" component={AddProduct}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </App>
    </Router>
  </Provider>
), document.getElementById('app'));
