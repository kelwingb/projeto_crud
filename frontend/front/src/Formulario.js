function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar }) {
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
            <input className="btn btn-primary" type="button" value="Alterar" />
            <input type='button' onClick={cancelar} value='Cancelar' className='btn btn-secondary' />
          </div>
      }
    </form>
  )
}

export default Formulario;