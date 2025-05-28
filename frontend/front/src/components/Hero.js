import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Gerencie seus produtos com estilo</h1>
        <p>Uma plataforma moderna e intuitiva para cadastro e gerenciamento de produtos</p>
        <div className="hero-buttons">
          <a href="#featured" className="btn btn-primary">Ver Destaques</a>
          <a href="#products" className="btn btn-outline">Gerenciar Produtos</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-container">
          {/* Imagem decorativa será adicionada via CSS */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
