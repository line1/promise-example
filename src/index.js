import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

const composedEnhancers = compose(
  // applyMiddleware(promiseMiddleware()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  reducer,
  { result: 'initial state' },
  composedEnhancers
);

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
