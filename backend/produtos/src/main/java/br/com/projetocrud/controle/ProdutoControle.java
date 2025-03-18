package br.com.projetocrud.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.servico.ProdutoServico;

@RestController
public class ProdutoControle {

  @Autowired
  private ProdutoServico ps;

      @PostMapping("/cadastrar")
     public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){
         return ps.cadastrarAlterar(pm, "cadastrar");
     }
     
     @PutMapping("/alterar")
     public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){
         return ps.cadastrarAlterar(pm, "alterar");
     }
  @GetMapping("/listar")
  public Iterable<ProdutoModelo> listar(){
    return ps.listar();
  }

  @GetMapping("/")
  public String rota() {
    return "API esta funcionando!";
  }
}
