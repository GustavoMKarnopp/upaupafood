import { Component, OnInit } from '@angular/core';
import { Iprodutos } from 'src/app/shared/models/Iprodutos';
import { GetProdCategoriasService } from 'src/app/shared/services/utils/get-prod-categorias.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public categoriasComProdutos: any = {}

  constructor(
    private getProdCategoriasService : GetProdCategoriasService
  ) {}

  ngOnInit(): void {
    this.getProdCategoriasService.obterCategorias().then(() => {
      this.categoriasComProdutos = this.getProdCategoriasService.categoriasFiltradoProduto;
      console.log(this.categoriasComProdutos);
    });
  }
}
