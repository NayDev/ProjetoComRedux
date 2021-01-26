import { combineReducers } from 'redux';

let contador = 0;

const initialState = {
  compras: []
}

function comprasReducer(state = initialState, action) {
  if(action.type === "ADICIONAR") {
    return { compras: [...state.compras, {id: contador++, nome: action.nome}]}
  } else if(action.type === "REMOVE") {
  
    return { compras: (state.compras).filter(item => item.id != action.id)}

  } else{
    return state;
  }
}



function tituloReducer(state = {titulo: "Título"}, action) {
  if(action.type === "ALTERAR"){
    return {titulo: action.value};
  } else{
      return state;
  }
}

const reducers = combineReducers( { comprasReducer ,tituloReducer } );

export default reducers;