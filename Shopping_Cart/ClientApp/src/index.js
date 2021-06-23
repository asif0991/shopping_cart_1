import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import { setCheckUserAction } from './store/actions/productsAction';

const middleware = () => {
  if (process.env.NODE_ENV !== 'production') {
    return [thunk, logger];
  } else {
    return [thunk]
  }
}

const store = createStore(rootReducer, applyMiddleware(...middleware()));

ReactDOM.render(
 <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
 </Provider>
  , document.getElementById('root'));

  store.dispatch(setCheckUserAction())
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
