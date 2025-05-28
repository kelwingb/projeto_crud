import React from 'react';

function ProductForm({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar, toggleFavorite }) {
  return (
    <div className="product-form-container" id="products">
      <div className="section-header">
        <h2>Gerenciamento de Produtos</h2>
        <p>Cadastre, edite e gerencie seu catálogo</p>
      </div>
      
      <form className="product-form">
        <div className="form-group">
          <label htmlFor="nome">Nome do Produto</label>
          <input 
            type="text" 
            id="nome"
            name="nome" 
            value={obj.nome} 
            onChange={eventoTeclado} 
            placeholder="Digite o nome do produto" 
            className="form-control" 
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <input 
            type="text" 
            id="marca"
            name="marca" 
            value={obj.marca} 
            onChange={eventoTeclado} 
            placeholder="Digite a marca do produto" 
            className="form-control" 
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="imageUrl">URL da Imagem</label>
          <input 
            type="url" 
            id="imageUrl"
            name="imageUrl" 
            value={obj.imageUrl || ''} 
            onChange={eventoTeclado} 
            placeholder="https://exemplo.com/imagem.jpg" 
            className="form-control" 
          />
          <small className="form-text">Insira o endereço de uma imagem online para o produto</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="preco">Preço (R$)</label>
          <input 
            type="number" 
            id="preco"
            name="preco" 
            value={obj.preco || ''} 
            onChange={eventoTeclado} 
            placeholder="0.00" 
            step="0.01" 
            min="0" 
            className="form-control" 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria"
            name="categoria" 
            value={obj.categoria || ''} 
            onChange={eventoTeclado} 
            className="form-control"
          >
            <option value="">Selecione uma categoria</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="vestuario">Vestuário</option>
            <option value="alimentos">Alimentos</option>
            <option value="moveis">Móveis</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea 
            id="descricao"
            name="descricao" 
            value={obj.descricao || ''} 
            onChange={eventoTeclado} 
            placeholder="Descreva o produto" 
            className="form-control" 
            rows="3"
          ></textarea>
        </div>
        
        {obj.imageUrl && (
          <div className="image-preview">
            <p>Pré-visualização:</p>
            <img 
              src={obj.imageUrl} 
              alt="Pré-visualização" 
              onError={(e) => {e.target.src = 'https://via.placeholder.com/150x150?text=Imagem+Inválida'}}
            />
          </div>
        )}
        
        {botao ? (
          <div className="form-buttons">
            <button type="button" onClick={cadastrar} className="btn btn-primary">
              <i className="fas fa-plus-circle"></i> Cadastrar Produto
            </button>
          </div>
        ) : (
          <div className="form-buttons">
            <button type="button" onClick={alterar} className="btn btn-warning">
              <i className="fas fa-edit"></i> Alterar
            </button>
            <button type="button" onClick={remover} className="btn btn-danger">
              <i className="fas fa-trash-alt"></i> Remover
            </button>
            {toggleFavorite && (
              <button type="button" onClick={() => toggleFavorite(obj.codigo)} className="btn btn-info">
                <i className={`fas ${obj.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i> 
                {obj.isFavorite ? 'Remover Destaque' : 'Destacar'}
              </button>
            )}
            <button type="button" onClick={cancelar} className="btn btn-secondary">
              <i className="fas fa-times"></i> Cancelar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProductForm;
