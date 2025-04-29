function Formulario() {
  return (
    <form>
      <h2>Sistema Gestor de Produtos</h2>
      <input type="text" placeholder="Nome"></input>
      <input type="text" placeholder="Marca"></input>

      <input type="button" value="Cadastrar" />
      <input type="button" value="Cancelar" />
      <input type="button" value="Alterar" />
      <input type="button" value="Remover" />

    </form>
  )
}

export default Formulario;