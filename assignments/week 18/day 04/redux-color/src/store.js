import { createStore, combineReducers } from "redux";
import SetNumberReducer from "./reducers/SetNumberReducer";
import claculateResultReducer from "./reducers/calculateResultReducer";
import InputColorReducer from './reducers/InputColorReducer'

let reducer = combineReducers ({
  number:SetNumberReducer,
  result:claculateResultReducer,
  color:InputColorReducer
})

let store = createStore(reducer);

store.subscribe(function(){
  console.log(store.getState());
})

function stateMapper(state){
  return state;
}


export {store,stateMapper};
