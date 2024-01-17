import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-homebase',
  templateUrl: './homebase.component.html',
  styleUrls: ['./homebase.component.scss']
})
export class HomebaseComponent implements OnInit{

  constructor(
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {


      console.log('teste')


  }

}


