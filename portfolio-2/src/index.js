import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, Link,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store.js'
// import './index.css';
import App from './components/Main/App';
import Landing from './components/Main/Landing';
import history from './utils/history';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={Landing}/>
          {/* <Route path="*" component={NotFound}/> */}
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('app'));
// registerServiceWorker();
