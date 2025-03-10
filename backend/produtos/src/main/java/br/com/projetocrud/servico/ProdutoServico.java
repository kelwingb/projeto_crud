package br.com.projetocrud.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {
  @Autowired
  private ProdutoRepositorio pr;

  public Iterable<ProdutoModelo> listar(){
    return pr.findAll();
  }
}