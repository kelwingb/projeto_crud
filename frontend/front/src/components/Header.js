import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo">ProductHub</div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home" className="nav-link">Início</a></li>
            <li><a href="#featured" className="nav-link">Destaques</a></li>
            <li><a href="#about" className="nav-link">Sobre</a></li>
            <li><a href="#how-it-works" className="nav-link">Como Funciona</a></li>
          </ul>
        </nav>
        <div className="theme-toggle">
          <button id="theme-toggle-btn" aria-label="Alternar tema">
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
