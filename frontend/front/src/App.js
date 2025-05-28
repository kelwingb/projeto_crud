import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  // Objeto produto com campos adicionais
  const produto = {
    codigo: null,
    nome: '',
    marca: '',
    imageUrl: '',
    preco: '',
    categoria: '',
    descricao: '',
    isFavorite: false
  }

  // Estados
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('nome-asc');
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  // Expor funções de manipulação para componentes
  window.handleSearch = setSearchTerm;
  window.handleFilter = setFilterCategory;
  window.handleSort = setSortBy;

  // UseEffect para carregar produtos
  useEffect(() => {
    setLoading(true);
    // Simulando delay de carregamento para demonstração
    setTimeout(() => {
      fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => {
          // Adicionando campos extras aos produtos existentes
          const produtosExtendidos = retorno_convertido.map(p => ({
            ...p,
            imageUrl: p.imageUrl || '',
            preco: p.preco || '',
            categoria: p.categoria || '',
            descricao: p.descricao || '',
            isFavorite: p.isFavorite || false
          }));
          setProdutos(produtosExtendidos);
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao carregar produtos:", error);
          // Dados de exemplo para demonstração
          const dadosExemplo = [
            {
              codigo: 1,
              nome: "Smartphone Galaxy S21",
              marca: "Samsung",
              imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=200&fit=crop",
              preco: 3999.99,
              categoria: "eletronicos",
              descricao: "Smartphone top de linha com câmera de alta resolução",
              isFavorite: true
            },
            {
              codigo: 2,
              nome: "Notebook Inspiron",
              marca: "Dell",
              imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
              preco: 4599.99,
              categoria: "eletronicos",
              descricao: "Notebook para trabalho e estudos com processador i5",
              isFavorite: false
            },
            {
              codigo: 3,
              nome: "Tênis Running",
              marca: "Nike",
              imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
              preco: 499.99,
              categoria: "vestuario",
              descricao: "Tênis para corrida com amortecimento extra",
              isFavorite: true
            }
          ];
          setProdutos(dadosExemplo);
          setLoading(false);
          showNotification("Usando dados de demonstração", "info");
        });
    }, 1000);
  }, []);

  // Alternar tema
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    showNotification(`Tema ${theme === 'light' ? 'escuro' : 'claro'} ativado`, "info");
  };

  // Exibir notificação
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  // Obter dados do formulário
  const aoDigitar = (e) => {
    const { name, value } = e.target;
    setObjProduto({ ...objProduto, [name]: value });
  }

  // Cadastrar produto
  const cadastrar = () => {
    setLoading(true);
    
    // Validação básica
    if (!objProduto.nome || !objProduto.marca) {
      showNotification("Nome e marca são obrigatórios", "error");
      setLoading(false);
      return;
    }
    
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          showNotification(retorno_convertido.mensagem, "warning");
        } else {
          // Adicionar campos extras ao produto retornado
          const novoProduto = {
            ...retorno_convertido,
            imageUrl: objProduto.imageUrl || '',
            preco: objProduto.preco || '',
            categoria: objProduto.categoria || '',
            descricao: objProduto.descricao || '',
            isFavorite: false
          };
          
          setProdutos([...produtos, novoProduto]);
          showNotification("Produto cadastrado com sucesso!", "success");
          limparFormulario();
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao cadastrar:", error);
        // Simulação para demonstração
        const novoProduto = {
          ...objProduto,
          codigo: produtos.length + 1,
          isFavorite: false
        };
        setProdutos([...produtos, novoProduto]);
        showNotification("Produto cadastrado com sucesso! (modo demonstração)", "success");
        limparFormulario();
        setLoading(false);
      });
  }

  // Alterar produto
  const alterar = () => {
    setLoading(true);
    
    // Validação básica
    if (!objProduto.nome || !objProduto.marca) {
      showNotification("Nome e marca são obrigatórios", "error");
      setLoading(false);
      return;
    }
    
    fetch('http://localhost:8080/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          showNotification(retorno_convertido.mensagem, "warning");
        } else {
          showNotification("Produto alterado com sucesso!", "success");

          // Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          // Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          // Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          // Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          limparFormulario();
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao alterar:", error);
        // Simulação para demonstração
        let vetorTemp = [...produtos];
        let indice = vetorTemp.findIndex((p) => p.codigo === objProduto.codigo);
        vetorTemp[indice] = objProduto;
        setProdutos(vetorTemp);
        showNotification("Produto alterado com sucesso! (modo demonstração)", "success");
        limparFormulario();
        setLoading(false);
      });
  }

  // Remover produto
  const remover = () => {
    setLoading(true);
    
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        showNotification(retorno_convertido.mensagem || "Produto removido com sucesso!", "success");

        // Cópia do vetor de produtos
        let vetorTemp = [...produtos];

        // Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });

        // Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        // Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        limparFormulario();
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao remover:", error);
        // Simulação para demonstração
        let vetorTemp = [...produtos];
        let indice = vetorTemp.findIndex((p) => p.codigo === objProduto.codigo);
        vetorTemp.splice(indice, 1);
        setProdutos(vetorTemp);
        showNotification("Produto removido com sucesso! (modo demonstração)", "success");
        limparFormulario();
        setLoading(false);
      });
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  // Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
    
    // Scroll suave até o formulário
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }

  // Alternar favorito
  const toggleFavorite = (codigo) => {
    let vetorTemp = [...produtos];
    let indice = vetorTemp.findIndex((p) => p.codigo === codigo);
    
    if (indice !== -1) {
      vetorTemp[indice] = {
        ...vetorTemp[indice],
        isFavorite: !vetorTemp[indice].isFavorite
      };
      
      setProdutos(vetorTemp);
      showNotification(
        vetorTemp[indice].isFavorite 
          ? `${vetorTemp[indice].nome} adicionado aos destaques!` 
          : `${vetorTemp[indice].nome} removido dos destaques!`, 
        "info"
      );
    }
  }

  // Filtrar produtos em destaque
  const produtosDestaque = produtos.filter(p => p.isFavorite);

  return (
    <div className={`app ${theme}`}>
      {/* Notificação Toast */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
        </div>
      )}
      
      {/* Indicador de carregamento */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      <Header />
      <main>
        <Hero />
        <FeaturedProducts featuredProducts={produtosDestaque} />
        <About />
        <HowItWorks />
        
        <section className="products-section">
          <ProductForm 
            botao={btnCadastrar} 
            eventoTeclado={aoDigitar} 
            cadastrar={cadastrar} 
            obj={objProduto} 
            cancelar={limparFormulario} 
            remover={remover} 
            alterar={alterar} 
            toggleFavorite={toggleFavorite}
          />
          
          <ProductList 
            produtos={produtos} 
            selecionar={selecionarProduto} 
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            filterCategory={filterCategory}
            sortBy={sortBy}
          />
        </section>
      </main>
      <Footer />
      
      {/* Botão de tema */}
      <button className="theme-toggle-floating" onClick={toggleTheme}>
        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      </button>
      
      {/* Botão de voltar ao topo */}
      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
