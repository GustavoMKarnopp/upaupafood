export interface Iprodutos{
  count?: number,
  next?: any,
  previous?: any,
  results: Array<results>
}
export interface results{
    id?: number,
    descricao?: string,
    categoria?: string,
    valor_venda?: number,
    url_imagem?: string,
    detalhes?: string,
    ordem?: number,
    item_pai?: boolean,
    item_filho?: boolean,
    cod_pai?: any,
    categoria_id?: number
}
