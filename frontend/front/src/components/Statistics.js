import React, { useState } from 'react';

function Statistics({ produtos }) {
  const [chartType, setChartType] = useState('category');
  
  // Calcular estatísticas
  const totalProdutos = produtos.length;
  const totalDestaque = produtos.filter(p => p.isFavorite).length;
  
  // Calcular valor total do estoque (apenas produtos com preço)
  const valorTotal = produtos
    .filter(p => p.preco)
    .reduce((total, produto) => total + parseFloat(produto.preco), 0);
  
  // Agrupar por categoria
  const categorias = {};
  produtos.forEach(produto => {
    const categoria = produto.categoria || 'sem-categoria';
    if (!categorias[categoria]) {
      categorias[categoria] = 0;
    }
    categorias[categoria]++;
  });
  
  // Agrupar por marca
  const marcas = {};
  produtos.forEach(produto => {
    if (!marcas[produto.marca]) {
      marcas[produto.marca] = 0;
    }
    marcas[produto.marca]++;
  });
  
  // Preparar dados para o gráfico
  const prepareChartData = () => {
    let data = [];
    let labels = [];
    let colors = [
      '#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#6366f1', 
      '#8b5cf6', '#ec4899', '#14b8a6', '#f43f5e', '#6b7280'
    ];
    
    if (chartType === 'category') {
      labels = Object.keys(categorias).map(cat => {
        switch(cat) {
          case 'eletronicos': return 'Eletrônicos';
          case 'vestuario': return 'Vestuário';
          case 'alimentos': return 'Alimentos';
          case 'moveis': return 'Móveis';
          case 'outros': return 'Outros';
          case 'sem-categoria': return 'Sem categoria';
          default: return cat;
        }
      });
      data = Object.values(categorias);
    } else {
      // Limitar a 5 marcas mais frequentes para legibilidade
      const sortedMarcas = Object.entries(marcas)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
      
      labels = sortedMarcas.map(item => item[0]);
      data = sortedMarcas.map(item => item[1]);
    }
    
    return { data, labels, colors: colors.slice(0, data.length) };
  };
  
  const { data, labels, colors } = prepareChartData();
  
  // Calcular percentagens para o gráfico
  const total = data.reduce((sum, value) => sum + value, 0);
  const percentages = data.map(value => ((value / total) * 100).toFixed(1));
  
  return (
    <section id="statistics" className="statistics-section">
      <div className="section-header">
        <h2>Estatísticas do Catálogo</h2>
        <p>Visualize dados importantes sobre seus produtos</p>
      </div>
      
      <div className="statistics-container">
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-box"></i>
            </div>
            <div className="stat-info">
              <h3>Total de Produtos</h3>
              <p className="stat-value">{totalProdutos}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="stat-info">
              <h3>Produtos em Destaque</h3>
              <p className="stat-value">{totalDestaque}</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="stat-info">
              <h3>Valor do Estoque</h3>
              <p className="stat-value">R$ {valorTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-controls">
            <button 
              className={`chart-btn ${chartType === 'category' ? 'active' : ''}`}
              onClick={() => setChartType('category')}
            >
              Por Categoria
            </button>
            <button 
              className={`chart-btn ${chartType === 'brand' ? 'active' : ''}`}
              onClick={() => setChartType('brand')}
            >
              Por Marca
            </button>
          </div>
          
          <div className="chart">
            <div className="pie-chart">
              <svg viewBox="0 0 100 100" className="pie">
                {data.length > 0 ? (
                  <>
                    {data.map((value, index) => {
                      // Calcular ângulos para o gráfico de pizza
                      const startAngle = index === 0 ? 0 : 
                        data.slice(0, index).reduce((sum, val) => sum + val, 0) / total * 360;
                      const endAngle = startAngle + (value / total * 360);
                      
                      // Converter ângulos para coordenadas
                      const startX = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                      const startY = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                      const endX = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                      const endY = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
                      
                      // Determinar se o arco é maior que 180 graus
                      const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
                      
                      return (
                        <path 
                          key={index}
                          d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                          fill={colors[index % colors.length]}
                        />
                      );
                    })}
                    <circle cx="50" cy="50" r="25" fill="white" />
                  </>
                ) : (
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="5">
                    Sem dados
                  </text>
                )}
              </svg>
            </div>
            
            <div className="chart-legend">
              {labels.map((label, index) => (
                <div className="legend-item" key={index}>
                  <span className="legend-color" style={{ backgroundColor: colors[index] }}></span>
                  <span className="legend-label">{label}</span>
                  <span className="legend-value">{percentages[index]}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="export-section">
        <h3>Exportar Dados</h3>
        <div className="export-buttons">
          <button className="btn btn-outline">
            <i className="fas fa-file-csv"></i> Exportar CSV
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-file-pdf"></i> Exportar PDF
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-print"></i> Imprimir
          </button>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
