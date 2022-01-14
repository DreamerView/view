import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

let local = localStorage.getItem('basket-info') ? JSON.parse(localStorage.getItem('basket-info')).length : 0; 

const defaultState = {cash:local,item:0,total:0,search:'',header:true};

const reducer = (state=defaultState,action) => {
  switch(action.type) {
    case "Add_Local": return {...state,cash:state.cash+action.payload};
    case "Minus_Local": return {...state,cash:state.cash-action.payload};
    case "GetTotalItem": return {...state,total:state.total-action.send};
    case "AddTotalItem": return {...state,total:state.total+action.send};
    case "LetTotalItem": return {...state,total:action.send};
    case "AddProduct": return {...state,item:state.item+action.put};
    case "GetProduct": return {...state,item:state.item-action.put};
    case "PutProduct": return {...state,item:state.item+action.put};
    case "LetProduct": return {...state,item:action.put};
    case "SetSearch": return {...state,search:action.set};
    case "SetHeader": return {...state,header:action.set};
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
