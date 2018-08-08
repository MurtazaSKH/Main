import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {Router,  Route, Link, Switch} from 'react-router-dom';

import store from './store.js';
import history from './utils/history';
// Component Files
import App from './components/Main/App';
import Main from './components/Main/Main';
import NotFound from './components/Main/NotFound';
import AllProducts from './components/Products/AllProducts';
import AddProduct from './components/Products/AddProduct';
import Login from './components/Auth/login';
import Register from './components/Auth/register';

import './styles/styles.scss';

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
