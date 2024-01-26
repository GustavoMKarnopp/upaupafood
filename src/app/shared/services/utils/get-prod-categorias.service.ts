import { Injectable } from '@angular/core';

import { ProdutosService } from 'src/app/shared/services/produtos.service';

//INTERFACE
import { results } from 'src/app/shared/models/Iprodutos';

@Injectable({
  providedIn: 'root'
})
export class GetProdCategoriasService {

  categorias: results[] = [];
  produtos: results[] = [];

  categoriasFiltradoProduto: any = {};

  constructor(
    private produtosService: ProdutosService
  ) {}

  obterCategorias(): any {
    // Obter categorias
    this.produtosService.getCategorias().then(response => {
      this.categorias = response?.results || [];
      this.obterProdutos();
    });
  }

  obterProdutos(): any {
    // Obter produtos
    this.produtosService.getProdutos().then(response => {
      this.produtos = response?.results || [];
      this.associarProdutosACategorias();
    });
  }

  associarProdutosACategorias(): any {
    // Estruturar os dados
    this.categorias.forEach(categoria => {
      if (categoria && categoria.id !== undefined) {
      this.categoriasFiltradoProduto[categoria.id] = {
        ...categoria,
        produtos: this.produtos.filter(produto => produto.categoria_id === categoria.id)
      };
    }
    });

    // console.log(this.categoriasFiltradoProduto);
    return this.categoriasFiltradoProduto
  }
}
