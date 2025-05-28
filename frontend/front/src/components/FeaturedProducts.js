import React from 'react';

function FeaturedProducts({ featuredProducts }) {
  return (
    <section id="featured" className="featured-section">
      <div className="section-header">
        <h2>Produtos em Destaque</h2>
        <p>Conheça nossos produtos mais populares</p>
      </div>
      
      <div className="featured-grid">
        {featuredProducts && featuredProducts.length > 0 ? (
          featuredProducts.map((product, index) => (
            <div className="product-card featured" key={index}>
              <div className="product-image">
                <img 
                  src={product.imageUrl || 'https://via.placeholder.com/300x200?text=Sem+Imagem'} 
                  alt={product.nome} 
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+Indisponível'}}
                />
                {product.isFavorite && <span className="favorite-badge"><i className="fas fa-star"></i></span>}
              </div>
              <div className="product-info">
                <h3>{product.nome}</h3>
                <p className="product-brand">{product.marca}</p>
                {product.preco && <p className="product-price">R$ {product.preco.toFixed(2)}</p>}
                <div className="product-actions">
                  <button className="btn btn-sm btn-outline">Detalhes</button>
                  <button className="btn btn-sm btn-primary">Editar</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>Nenhum produto em destaque no momento</p>
            <button className="btn btn-primary">Adicionar Produtos</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
