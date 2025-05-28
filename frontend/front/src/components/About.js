import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>Sobre a Plataforma</h2>
        <p>Conheça as vantagens de usar nossa solução</p>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <div className="about-image-container">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Equipe trabalhando com produtos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
            />
          </div>

        </div>
        
        <div className="about-text">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="feature-info">
              <h3>Rápido e Eficiente</h3>
              <p>Gerencie seus produtos com agilidade e precisão, economizando tempo e recursos.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="feature-info">
              <h3>Totalmente Responsivo</h3>
              <p>Acesse e gerencie seus produtos de qualquer dispositivo, a qualquer momento.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="feature-info">
              <h3>Análises Inteligentes</h3>
              <p>Visualize estatísticas e insights sobre seu catálogo de produtos.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="feature-info">
              <h3>Seguro e Confiável</h3>
              <p>Seus dados estão protegidos com as mais modernas tecnologias de segurança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
