import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// Router instead of BrowserRouter
import {Provider} from 'react-redux';

import store from './store.js'
// import './index.css';
import App from './components/Main/App';
import Landing from './components/Main/Landing';
import history from './utils/history';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    {/*  history={history}*/}
    {/* <BrowserRouter > */}
      <App>
        {/* <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path="*" component={NotFound}/>
        </Switch> */}
        <Landing/>
      </App>
    {/* </BrowserRouter> */}
  </Provider>
), document.getElementById('app'));
// registerServiceWorker();
