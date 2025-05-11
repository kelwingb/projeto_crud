import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //Objeto produto
  const produto = {
    codigo: 0,
    nome: '',
    marca: ''
  }


  const [btnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);


  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);


  return (
    <div>
      <p>{JSON.stringify(produtos)}</p>
      <Formulario botao={btnCadastrar} />
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;