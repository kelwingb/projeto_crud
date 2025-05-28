import React from 'react';

function ProductList({ produtos, selecionar, toggleFavorite, searchTerm, filterCategory, sortBy }) {
  // Filtragem de produtos
  let filteredProducts = [...produtos];
  
  // Aplicar busca
  if (searchTerm && searchTerm.trim() !== '') {
    const term = searchTerm.toLowerCase().trim();
    filteredProducts = filteredProducts.filter(product => 
      product.nome.toLowerCase().includes(term) || 
      product.marca.toLowerCase().includes(term) ||
      (product.descricao && product.descricao.toLowerCase().includes(term))
    );
  }
  
  // Aplicar filtro de categoria
  if (filterCategory && filterCategory !== 'todos') {
    filteredProducts = filteredProducts.filter(product => 
      product.categoria === filterCategory
    );
  }
  
  // Aplicar ordenação
  if (sortBy) {
    switch(sortBy) {
      case 'nome-asc':
        filteredProducts.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case 'nome-desc':
        filteredProducts.sort((a, b) => b.nome.localeCompare(a.nome));
        break;
      case 'preco-asc':
        filteredProducts.sort((a, b) => (a.preco || 0) - (b.preco || 0));
        break;
      case 'preco-desc':
        filteredProducts.sort((a, b) => (b.preco || 0) - (a.preco || 0));
        break;
      default:
        break;
    }
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h3>Lista de Produtos</h3>
        <div className="product-list-controls">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              className="search-input" 
              value={searchTerm || ''}
              onChange={(e) => window.handleSearch && window.handleSearch(e.target.value)}
            />
            <i className="fas fa-search search-icon"></i>
          </div>
          
          <div className="filter-container">
            <select 
              className="filter-select"
              value={filterCategory || 'todos'}
              onChange={(e) => window.handleFilter && window.handleFilter(e.target.value)}
            >
              <option value="todos">Todas as categorias</option>
              <option value="eletronicos">Eletrônicos</option>
              <option value="vestuario">Vestuário</option>
              <option value="alimentos">Alimentos</option>
              <option value="moveis">Móveis</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          
          <div className="sort-container">
            <select 
              className="sort-select"
              value={sortBy || 'nome-asc'}
              onChange={(e) => window.handleSort && window.handleSort(e.target.value)}
            >
              <option value="nome-asc">Nome (A-Z)</option>
              <option value="nome-desc">Nome (Z-A)</option>
              <option value="preco-asc">Preço (menor-maior)</option>
              <option value="preco-desc">Preço (maior-menor)</option>
            </select>
          </div>
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
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
                {product.categoria && <span className="product-category">{product.categoria}</span>}
                {product.preco && <p className="product-price">R$ {parseFloat(product.preco).toFixed(2)}</p>}
                {product.descricao && <p className="product-description">{product.descricao}</p>}
                <div className="product-actions">
                  <button 
                    className="btn btn-sm btn-primary" 
                    onClick={() => selecionar(index)}
                  >
                    <i className="fas fa-edit"></i> Editar
                  </button>
                  {toggleFavorite && (
                    <button 
                      className="btn btn-sm btn-outline" 
                      onClick={() => toggleFavorite(product.codigo)}
                    >
                      <i className={`fas ${product.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <i className="fas fa-search fa-3x"></i>
          <p>Nenhum produto encontrado</p>
          <p className="empty-state-sub">Tente ajustar os filtros ou adicionar novos produtos</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
