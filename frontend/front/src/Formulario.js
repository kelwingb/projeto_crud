function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover }) {
  return (
    <form>
      <h2>Sistema Gestor de Produtos</h2>
      <input type='text' value={obj.nome} placeholder='Nome' onChange={eventoTeclado} name="nome" className='form-control' />
      <input type='text' value={obj.marca} placeholder='Marca' onChange={eventoTeclado} name="marca" className='form-control' />
      {
        botao
          ?
          <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary' />
          :
          <div>
            <input className="btn btn-warning" type="button" value="Cancelar" />
            <input type='button' onClick={remover} value='remover' className='btn btn-danger' />
            <input type='button' onClick={cancelar} value='cancelar' className='btn btn-secondary' />
          </div>
      }
    </form>
  )
}

export default Formulario;