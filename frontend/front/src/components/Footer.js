import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">ProductHub</div>
          <p>Gerenciamento de produtos simplificado</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#featured">Destaques</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#how-it-works">Como Funciona</a></li>
              <li><a href="#products">Gerenciar Produtos</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#products">Cadastrar Produto</a></li>
              <li><a href="#products">Listar Produtos</a></li>
              <li><a href="#products">Estatísticas</a></li>
              <li><a href="#products">Exportar Dados</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contato</h4>
            <ul>
              <li><a href="#"><i className="fas fa-envelope"></i> kelwin@gmail.com</a></li>
              <li><a href="#"><i className="fas fa-phone"></i> (11) 9999-9999</a></li>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> São Paulo, SP</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kelwin. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
