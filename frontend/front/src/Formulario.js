  function Formulario({ botao }) {
    return (
      <form>
        <h1>Formulario</h1>
  
        <input className="form-control" type="text" placeholder="Nome"></input>
        <input className="form-control" type="text" placeholder="Marca"></input>
        {
          botao
            ?
            <input className="btn btn-success" type="button" value="Cadastrar" />
            :
            <div>
              <input className="btn btn-success" type="button" value="Cadastrar" />
              <input className="btn btn-warning" type="button" value="Cancelar" />
              <input className="btn btn-primary" type="button" value="Alterar" />
              <input className="btn btn-danger" type="button" value="Remover" />
            </div>
        }
      </form>
    )
  }
  export default Formulario;