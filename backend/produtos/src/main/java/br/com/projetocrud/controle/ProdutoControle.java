package br.com.projetocrud.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.servico.ProdutoServico;

@RestController
public class ProdutoControle {

  @Autowired
  private ProdutoServico ps;

  @GetMapping("/listar")
  public Iterable<ProdutoModelo> listar(){
    return ps.listar();
  }

  @GetMapping("/")
  public String rota() {
    return "API esta funcionando!";
  }
}
