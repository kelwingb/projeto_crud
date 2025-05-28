import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Statistics from './components/Statistics';
import ExportTools from './components/ExportTools';
import Footer from './components/Footer';
import './App.css';

// Componente de demonstração para visualização
function DemoApp() {
  // Dados de exemplo para demonstração
  const produtosExemplo = [
    {
      codigo: 1,
      nome: "Smartphone Galaxy S21",
      marca: "Samsung",
      imageUrl: "https://www.bing.com/aclick?ld=e8EFL4HOiex12utsKS8HtUljVUCUxZ_as0pqQYnxAyrGHahtNfvouXQuKELe482Jm_j7sFOv-WDI30EChM4ffeO4I2R9tS6mhQCt1Ne3cq4dpBNbPDR-3h4moE-Z-wdKAbkfS_SOBeqEIP8rUbnw5nvp3X0f8x_zne0BeOneyKYlirrjjLpwz8_epnoPvvTQGzoWRg7A&u=aHR0cHMlM2ElMmYlMmZ3d3cubWVyY2Fkb2xpdnJlLmNvbS5iciUyZnNtYXJ0cGhvbmUtc2Ftc3VuZy1nYWxheHktczIxLTVnLXRsLTYyLTEyOGdiLThnYi1yYW0tYnJhbmNvJTJmcCUyZk1MQjE3MzMxNTE5JTNmcGRwX2ZpbHRlcnMlM2RpdGVtX2lkJTI1M0FNTEI1MjczMTgxNDE0JTI2ZnJvbSUzZGdzaG9wJTI2bWF0dF90b29sJTNkMjg5OTgyMDQlMjZtYXR0X3dvcmQlM2QlMjZtYXR0X3NvdXJjZSUzZGJpbmclMjZtYXR0X2NhbXBhaWduJTNkTUxCX01MX0JJTkdfQU9fQ0UtU01BUlRQSE9ORVMtQUxMX1hfUExBX0FMTEJfVFhTX0FMTCUyNm1hdHRfY2FtcGFpZ25faWQlM2Q2Mzg2NDk5MzQlMjZtYXR0X2FkX2dyb3VwJTNkU01BUlRQSE9ORVMlMjZtYXR0X21hdGNoX3R5cGUlM2RlJTI2bWF0dF9uZXR3b3JrJTNkbyUyNm1hdHRfZGV2aWNlJTNkYyUyNm1hdHRfa2V5d29yZCUzZGRlZmF1bHQlMjZtc2Nsa2lkJTNkZjEwNDdlODhmMzNlMWViNTQwYjYxNmJkMGFmY2MzMjIlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RNTEJfTUxfQklOR19BT19DRS1TTUFSVFBIT05FUy1BTExfWF9QTEFfQUxMQl9UWFNfQUxMJTI2dXRtX3Rlcm0lM2Q0NTgxMjUyNjU4MDc1NDM2JTI2dXRtX2NvbnRlbnQlM2RTTUFSVFBIT05FUw&rlid=f1047e88f33e1eb540b616bd0afcc322&ntb=1",
      preco: 3999.99,
      categoria: "eletronicos",
      descricao: "Smartphone top de linha com câmera de alta resolução",
      isFavorite: true
    },
    {
      codigo: 2,
      nome: "Notebook Inspiron",
      marca: "Dell",
      imageUrl: "https://www.bing.com/aclick?ld=e8_1wziGO0m6vx6WkSTUGRpzVUCUw2ZxzYaFLRJNlHiMhq-NAkLYPQImGAXDOUyR74ujG21QifTFv7JaUSBj9C8bM2tjmbZV2H9aI-CklxgnzpBdXFIcGtd7LHNoHiL_EqYGFj6Mn0aRB5urS57CNf7JF4yX49fkQ287-tdWPW0SMDkxRVLsD3pcb9Sa5aCBShNNeLHQ&u=aHR0cHMlM2ElMmYlMmZ3d3cuZGVsbC5jb20lMmZwdC1iciUyZnNob3AlMmZjdHklMmZwZHAlMmZzcGQlMmZpbnNwaXJvbi0xNS0zNTIwLWxhcHRvcCUyZmkzNTIwd2FkbDEwMDR3JTNmdGZjaWQlM2QyMzY4NTg4OSUyNmdhY2QlM2Q5NjU3MTA1LTE0MDY0LTU3NjMwMTctMzYxNjk4OTY0LTAlMjZkZ2MlM2RTVCUyNmNpZCUzZDcxNzAwMDAwMTE5NDIwMTI2JTI2Z2NsaWQlM2RlNjExYjdkZjc1ZDExMGJiNmNjYWRmZWE4Zjg5ODMzZSUyNmdjbHNyYyUzZDNwLmRzJTI2bXNjbGtpZCUzZGU2MTFiN2RmNzVkMTEwYmI2Y2NhZGZlYThmODk4MzNlJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkQlJfQVBfUExBLVBNQVhfU3lzdGVtcyUyNnV0bV90ZXJtJTNkMjMyOTI0NjY2NDgwODQwNSUyNnV0bV9jb250ZW50JTNkTm90ZWJvb2s&rlid=e611b7df75d110bb6ccadfea8f89833e&ntb=1",
      preco: 4599.99,
      categoria: "eletronicos",
      descricao: "Notebook para trabalho e estudos com processador i5",
      isFavorite: false
    },
    {
      codigo: 3,
      nome: "Tênis Running",
      marca: "Nike",
      imageUrl: "https://via.placeholder.com/300x200?text=Tenis+Nike",
      preco: 499.99,
      categoria: "vestuario",
      descricao: "Tênis para corrida com amortecimento extra",
      isFavorite: true
    },
    {
      codigo: 4,
      nome: "Smart TV 55\"",
      marca: "LG",
      imageUrl: "https://via.placeholder.com/300x200?text=TV+LG",
      preco: 2899.99,
      categoria: "eletronicos",
      descricao: "Smart TV com resolução 4K e sistema webOS",
      isFavorite: false
    },
    {
      codigo: 5,
      nome: "Cafeteira Elétrica",
      marca: "Philips",
      imageUrl: "https://via.placeholder.com/300x200?text=Cafeteira",
      preco: 249.99,
      categoria: "eletrodomesticos",
      descricao: "Cafeteira com capacidade para 12 xícaras",
      isFavorite: true
    },
    {
      codigo: 6,
      nome: "Cadeira Gamer",
      marca: "ThunderX3",
      imageUrl: "https://via.placeholder.com/300x200?text=Cadeira+Gamer",
      preco: 1299.99,
      categoria: "moveis",
      descricao: "Cadeira ergonômica para gamers com ajustes de altura",
      isFavorite: false
    }
  ];

  // Produtos em destaque
  const produtosDestaque = produtosExemplo.filter(p => p.isFavorite);

  return (
    <div className="app light">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts featuredProducts={produtosDestaque} />
        <About />
        <HowItWorks />
        <ProductForm 
          botao={true} 
          eventoTeclado={() => {}} 
          cadastrar={() => {}} 
          obj={{
            nome: '',
            marca: '',
            imageUrl: '',
            preco: '',
            categoria: '',
            descricao: '',
            isFavorite: false
          }} 
          cancelar={() => {}} 
          remover={() => {}} 
          alterar={() => {}} 
          toggleFavorite={() => {}}
        />
        <ProductList 
          produtos={produtosExemplo} 
          selecionar={() => {}} 
          toggleFavorite={() => {}}
          searchTerm=""
          filterCategory="todos"
          sortBy="nome-asc"
        />
        <Statistics produtos={produtosExemplo} />
        <ExportTools produtos={produtosExemplo} />
      </main>
      <Footer />
      
      {/* Botão de tema */}
      <button className="theme-toggle-floating">
        <i className="fas fa-moon"></i>
      </button>
      
      {/* Botão de voltar ao topo */}
      <button className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default DemoApp;
