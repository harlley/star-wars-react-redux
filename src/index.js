import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import './css/global.css';
import Home from './components/Home';
import PeopleListContainer from './containers/PeopleListContainer';
import PlanetsListContainer from './containers/PlanetsListContainer';
import PersonDetailsContainer from './containers/PersonDetailsContainer';
import PlanetDetailsContainer from './containers/PlanetDetailsContainer';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import global from './reducers/globalReducer';

const history = createHistory();
const router = routerMiddleware(history);

const store = createStore(
  combineReducers({
    global,
    router: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(
      promise(), 
      thunk, 
      router, 
      //logger
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/people' component={PeopleListContainer}/>
        <Route path='/people/:id' component={PersonDetailsContainer}/>
        <Route exact path='/planets' component={PlanetsListContainer}/>
        <Route path='/planets/:id' component={PlanetDetailsContainer}/>
      </Switch>  
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);