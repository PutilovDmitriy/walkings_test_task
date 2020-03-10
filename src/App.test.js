import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import rootReducer from './redux/reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk))

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

serviceWorker.unregister();