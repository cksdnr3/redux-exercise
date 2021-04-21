import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterReducer from './counter/reducer/Counter.reducer'

const rootReducer = combineReducers({
  counterReducer
})

const store = createStore(rootReducer)

console.log("store: " + JSON.stringify(store.getState()))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ),document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();