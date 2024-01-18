import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//PATH ROTAS
import { path } from 'src/app/environment/paths';
import { API_PATH } from 'src/app/environment/environment';

//INTERFACES
import { Iprodutos } from '../models/Iprodutos';
import { Icategorias } from '../models/Icategorias';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  getCategorias(){
    return this.httpClient.get<Icategorias>(`${API_PATH}/${path.CATEGORIA_APP}/?format=json`).toPromise();
  }

  getProdutos(){
    return this.httpClient.get<Iprodutos>(`${API_PATH}/${path.PRODUTO_APP}/?format=json`).toPromise();
  }
}
