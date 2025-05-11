function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
  return (
    <form>
      <h2>Sistema Gestor de Produtos</h2>
      <input type='text' value={obj.nome} placeholder='Nome' onChange={eventoTeclado} name="nome" className='form-control' />
      <input type='text' value={obj.marca} placeholder='Marca' onChange={eventoTeclado} name="marca" className='form-control' />
      {
        botao
          ?
          <div className="form-buttons">
            <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-success' />
          </div>
          :
          <div className="form-buttons">
            <input type='button' onClick={alterar} value='Alterar' className='btn btn-warning' />
            <input type='button' onClick={remover} value='Remover' className='btn btn-danger' />
            <input type='button' onClick={cancelar} value='Cancelar' className='btn btn-secondary' />
          </div>
      }
    </form>
  )
}

export default Formulario;