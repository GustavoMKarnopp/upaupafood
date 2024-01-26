import { Component, OnInit } from '@angular/core';
// import { GetProdCategoriasService } from 'src/app/shared/services/utils/get-prod-categorias.service';

@Component({
  selector: 'app-homebase',
  templateUrl: './homebase.component.html',
  styleUrls: ['./homebase.component.scss']
})
export class HomebaseComponent implements OnInit{

  constructor(
    // private getProdCategoriasService : GetProdCategoriasService
  ) {}

  // public getProd = this.getProdCategoriasService.categoriasFiltradoProduto;

  ngOnInit(): void {
    // this.getProdCategoriasService.obterCategorias()
    }
  }


