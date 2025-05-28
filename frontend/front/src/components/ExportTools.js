import React, { useState } from 'react';

function ExportTools({ produtos }) {
  const [exportFormat, setExportFormat] = useState('csv');
  const [exportStatus, setExportStatus] = useState('');
  
  // Função para exportar dados em CSV
  const exportToCSV = () => {
    setExportStatus('processing');
    
    try {
      // Cabeçalhos do CSV
      const headers = ['Código', 'Nome', 'Marca', 'Categoria', 'Preço', 'Descrição', 'URL da Imagem', 'Destaque'];
      
      // Converter produtos para linhas CSV
      const rows = produtos.map(produto => [
        produto.codigo,
        produto.nome,
        produto.marca,
        produto.categoria || '',
        produto.preco || '',
        produto.descricao || '',
        produto.imageUrl || '',
        produto.isFavorite ? 'Sim' : 'Não'
      ]);
      
      // Combinar cabeçalhos e linhas
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => 
          // Escapar células com vírgulas ou aspas
          typeof cell === 'string' && (cell.includes(',') || cell.includes('"')) 
            ? `"${cell.replace(/"/g, '""')}"` 
            : cell
        ).join(','))
      ].join('\n');
      
      // Criar blob e link para download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `produtos_${new Date().toISOString().slice(0,10)}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setExportStatus('success');
      setTimeout(() => setExportStatus(''), 2000);
    } catch (error) {
      console.error('Erro ao exportar CSV:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus(''), 2000);
    }
  };
  
  // Função para exportar dados em JSON
  const exportToJSON = () => {
    setExportStatus('processing');
    
    try {
      // Criar blob e link para download
      const jsonContent = JSON.stringify(produtos, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `produtos_${new Date().toISOString().slice(0,10)}.json`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setExportStatus('success');
      setTimeout(() => setExportStatus(''), 2000);
    } catch (error) {
      console.error('Erro ao exportar JSON:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus(''), 2000);
    }
  };
  
  // Função para simular impressão
  const printData = () => {
    setExportStatus('processing');
    
    try {
      // Criar conteúdo para impressão
      const printWindow = window.open('', '_blank');
      
      if (!printWindow) {
        throw new Error('Não foi possível abrir a janela de impressão. Verifique se os pop-ups estão permitidos.');
      }
      
      printWindow.document.write(`
        <html>
          <head>
            <title>Catálogo de Produtos - ${new Date().toLocaleDateString()}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { color: #4f46e5; text-align: center; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th { background-color: #4f46e5; color: white; padding: 10px; text-align: left; }
              td { padding: 8px; border-bottom: 1px solid #ddd; }
              tr:nth-child(even) { background-color: #f9fafb; }
              .product-image { max-width: 80px; max-height: 80px; }
              .print-info { text-align: center; color: #6b7280; margin-top: 30px; font-size: 12px; }
              @media print {
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <h1>Catálogo de Produtos</h1>
            <p>Data de geração: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
            <p>Total de produtos: ${produtos.length}</p>
            
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Imagem</th>
                  <th>Nome</th>
                  <th>Marca</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                ${produtos.map(produto => `
                  <tr>
                    <td>${produto.codigo}</td>
                    <td>${produto.imageUrl ? `<img src="${produto.imageUrl}" alt="${produto.nome}" class="product-image" />` : ''}</td>
                    <td>${produto.nome} ${produto.isFavorite ? '⭐' : ''}</td>
                    <td>${produto.marca}</td>
                    <td>${produto.categoria || '-'}</td>
                    <td>${produto.preco ? `R$ ${parseFloat(produto.preco).toFixed(2)}` : '-'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            
            <div class="print-info">
              <p>ProductHub - Sistema de Gerenciamento de Produtos</p>
            </div>
            
            <div class="no-print" style="text-align: center; margin-top: 20px;">
              <button onclick="window.print();" style="padding: 10px 20px; background-color: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Imprimir
              </button>
              <button onclick="window.close();" style="padding: 10px 20px; background-color: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">
                Fechar
              </button>
            </div>
          </body>
        </html>
      `);
      
      printWindow.document.close();
      
      setExportStatus('success');
      setTimeout(() => setExportStatus(''), 2000);
    } catch (error) {
      console.error('Erro ao preparar impressão:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus(''), 2000);
    }
  };
  
  // Executar a exportação com base no formato selecionado
  const handleExport = () => {
    switch(exportFormat) {
      case 'csv':
        exportToCSV();
        break;
      case 'json':
        exportToJSON();
        break;
      case 'print':
        printData();
        break;
      default:
        exportToCSV();
    }
  };
  
  return (
    <section id="export" className="export-tools-section">
      <div className="section-header">
        <h2>Ferramentas de Exportação</h2>
        <p>Exporte seus dados em diferentes formatos</p>
      </div>
      
      <div className="export-container">
        <div className="export-options">
          <div className="export-format-selector">
            <label htmlFor="export-format">Formato de Exportação:</label>
            <select 
              id="export-format" 
              value={exportFormat} 
              onChange={(e) => setExportFormat(e.target.value)}
              className="form-control"
            >
              <option value="csv">CSV (Excel)</option>
              <option value="json">JSON</option>
              <option value="print">Impressão</option>
            </select>
          </div>
          
          <div className="export-description">
            {exportFormat === 'csv' && (
              <p>Exporta todos os produtos em formato CSV, compatível com Excel e outros softwares de planilha.</p>
            )}
            {exportFormat === 'json' && (
              <p>Exporta todos os produtos em formato JSON, ideal para integração com outros sistemas.</p>
            )}
            {exportFormat === 'print' && (
              <p>Prepara uma visualização para impressão do catálogo de produtos.</p>
            )}
          </div>
          
          <button 
            className={`btn btn-primary export-btn ${exportStatus === 'processing' ? 'loading' : ''}`}
            onClick={handleExport}
            disabled={exportStatus === 'processing'}
          >
            {exportStatus === 'processing' ? (
              <>Processando <span className="loading-dots">...</span></>
            ) : (
              <>
                <i className={`fas ${
                  exportFormat === 'csv' ? 'fa-file-csv' : 
                  exportFormat === 'json' ? 'fa-file-code' : 
                  'fa-print'
                }`}></i> 
                Exportar {
                  exportFormat === 'csv' ? 'CSV' : 
                  exportFormat === 'json' ? 'JSON' : 
                  'para Impressão'
                }
              </>
            )}
          </button>
          
          {exportStatus === 'success' && (
            <div className="export-status success">
              <i className="fas fa-check-circle"></i> Exportação concluída com sucesso!
            </div>
          )}
          
          {exportStatus === 'error' && (
            <div className="export-status error">
              <i className="fas fa-exclamation-circle"></i> Erro ao exportar. Tente novamente.
            </div>
          )}
        </div>
        
        <div className="export-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="info-content">
              <h3>Dica de Exportação</h3>
              <p>Você pode filtrar e ordenar os produtos antes de exportar para obter exatamente os dados que precisa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExportTools;
