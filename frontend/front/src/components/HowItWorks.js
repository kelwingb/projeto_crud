import React from 'react';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="section-header">
        <h2>Como Funciona</h2>
        <p>Simples, intuitivo e poderoso</p>
      </div>
      
      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-icon">
            <i className="fas fa-plus-circle"></i>
          </div>
          <h3>Cadastre seus produtos</h3>
          <p>Adicione facilmente novos produtos com nome, marca, preço, descrição e imagem.</p>
        </div>
        
        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-icon">
            <i className="fas fa-search"></i>
          </div>
          <h3>Visualize e pesquise</h3>
          <p>Encontre rapidamente qualquer produto com nossa busca inteligente e filtros avançados.</p>
        </div>
        
        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-icon">
            <i className="fas fa-edit"></i>
          </div>
          <h3>Edite quando necessário</h3>
          <p>Atualize informações, altere imagens ou ajuste preços com apenas alguns cliques.</p>
        </div>
        
        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-icon">
            <i className="fas fa-chart-pie"></i>
          </div>
          <h3>Analise e decida</h3>
          <p>Visualize estatísticas e tome decisões baseadas em dados reais do seu catálogo.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
