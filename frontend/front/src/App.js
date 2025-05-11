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

  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);


  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  //Obter dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <p>{JSON.stringify(objProduto)}</p>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} />
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;