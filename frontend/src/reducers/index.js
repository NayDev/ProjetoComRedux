import { combineReducers } from 'redux';

const initialState = {
  compras: []
}

function comprasReducer(state = initialState, action) {
  if(action.type === "ADICIONAR") {
    return { compras: [...state.compras, {...action.value }]}
  } else {
      return state;
  }
}

function tituloReducer(state = {titulo: "Vamos trocar o Titulo?"}, action) {
  if(action.type === "ALTERAR"){
    return {titulo: action.value};
  } else{
      return state;
  }
}

const reducers = combineReducers( { comprasReducer, tituloReducer } );

export default reducers;