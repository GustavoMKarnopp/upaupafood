  export interface Icategorias{
    count?: number,
    next?: any,
    previous?: any,
    results: Array<categoria>
  }

  export interface categoria{
    id?: number,
    descricao?: string,
    aberto: boolean,
    detalhes?: string,
    ordem: number
  }
