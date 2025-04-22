function Formulario(botao) {
  return (
    <form>
      <h1>Formulário</h1>

      <input className="form-control" type="text" placeholder="Nome" />
      <input className="form-control" type="text" placeholder="Marca" />

      {
        botao
          ?
          <input className="btn btn-success" type="button" value="Cadastrar" />
          :
          <div>
            <input className="btn btn-dark" type="button" value="Alterar" />
            <input className="btn btn-danger" type="button" value="Remover" />
            <input className="btn btn-warning" type="button" value="Cancelar" />
          </div>
      }
    </form>
  )
}

export default Formulario;