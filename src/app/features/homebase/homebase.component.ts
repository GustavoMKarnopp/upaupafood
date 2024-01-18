import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

//INTERFACE
import { Icategorias } from 'src/app/shared/models/Icategorias';
import { Iprodutos, results } from 'src/app/shared/models/Iprodutos';

@Component({
  selector: 'app-homebase',
  templateUrl: './homebase.component.html',
  styleUrls: ['./homebase.component.scss']
})
export class HomebaseComponent implements OnInit{

  categorias: results[] = [];
  produtos: results[] = [];

  categoriasFiltradoProduto: any = {};


  constructor(
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    // Obter categorias
    this.produtosService.getCategorias().then(response => {
      this.categorias = response?.results || [];
      this.obterProdutos();
    });
  }

  obterProdutos(): void {
    // Obter produtos
    this.produtosService.getProdutos().then(response => {
      this.produtos = response?.results || [];
      this.associarProdutosACategorias();
    });
  }

  associarProdutosACategorias(): void {
    // Estruturar os dados
    this.categorias.forEach(categoria => {
      if (categoria && categoria.id !== undefined) {
      this.categoriasFiltradoProduto[categoria.id] = {
        ...categoria,
        produtos: this.produtos.filter(produto => produto.categoria_id === categoria.id)
      };
    }
    });

    console.log(this.categoriasFiltradoProduto);
  }
}


