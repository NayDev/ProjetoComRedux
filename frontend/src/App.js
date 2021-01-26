import React from 'react';
import { useSelector, useDispatch } from "react-redux";


export default function App() {

  const [inputCompras, setInputCompras] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  //Redux
  const compras = useSelector((state) => state.comprasReducer.compras);
  const stateTitulo = useSelector(state => state.tituloReducer.titulo);
  const dispatch = useDispatch();

function addCompra(event){

  event.preventDefault();
  // const objCompra = {
  //   nome: inputCompras
  // }
  
  dispatch( {type: "ADICIONAR", nome: inputCompras});
  setInputCompras("");
}
 function removeCompras(event) {
  event.preventDefault();
   //alert(event.target.id);

   dispatch( {type: "REMOVE", id: event.target.id});

 }
function altTitulo(event) {
  setInputTitulo(event.target.value);
  dispatch( {type: "ALTERAR", value: event.target.value});
  
}

return (
  <>
    <h2 className="text-center my-5 bg-warning text-secondary">Avaliação de Redux</h2>
  <div className="d-flex justify-content-between p-3 bg-light rounded shadow-lg"> 
 
    <section className="bg-primary container w-50 m-5">
      <h1>Vamos Fazer as Compras?</h1>
        <form onSubmit={addCompra}>
          <input 
            className="form-control" 
            placeholder="Digite algo que quer comprar..." 
            value={inputCompras}
            onChange={(event) => setInputCompras(event.target.value)}  
          />
          <button className="btn btn-success my-3">Comprar</button>
        </form>
      <h2>Compras Realizadas</h2>
      <table className="table table-striped" >
        <thead> 
          <tr> 
            <th scope="col">Compra</th>
            <th scope="col">Produto</th>
            <th scope="col">Ação</th>
          </tr> 
        </thead>
        {compras.map((compra) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{compra.id}</th>
                <td>{compra.nome}</td>
                <td><button id={compra.id} className="btn btn-danger my-2" onClick={removeCompras}>Excluir</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </section>

    <section className="container bg-info my-5 w-50 m-5">
      <form>
        <h1>{stateTitulo}</h1>
        <input  className="form-control my-4"  placeholder="Digite um título para Trocar" value={inputTitulo} onChange={altTitulo}/>
      </form>
    </section>
  
  </div>
  <div class="text-center p-3" >
  
    © 2021 Nayara Suelen 2021 - Recode Pro
  </div>
  <div> 
    

    <p></p>
  </div>
  </>
);
}

