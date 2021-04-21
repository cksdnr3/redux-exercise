import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import counterReducer from './counter/reducer/counter.reducer'
import counterSlice from './counter/reducer/counter.slice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  counterReducer,
  counterSlice
})

// const store = createStore(rootReducer) 바닐라 리덕스
const store = configureStore({
  reducer: rootReducer
})

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