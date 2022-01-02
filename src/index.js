import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

let local = localStorage.getItem('basket-info') ? JSON.parse(localStorage.getItem('basket-info')).length : 0; 

const defaultState = {cash:local};

const reducer = (state=defaultState,action) => {
  switch(action.type) {
    case "Add_Local": return {...state,cash:state.cash+action.payload};
    case "Minus_Local": return {...state,cash:state.cash-action.payload};
    default: return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
