package br.com.projetocrud.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.projetocrud.modelo.ProdutoModelo;

public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long> {
  
}
