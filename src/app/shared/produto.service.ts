import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private Produtos: Produto[];

  constructor() {
    this.Produtos = new Array();
  }

  getProdutos() {
    return this.Produtos;
  }

  excluir(Produto: Produto) {
    this.Produtos = this.Produtos.filter((j) => j.codigo !== Produto.codigo);
  }

  salvar(Produto: Produto) {
    const indice = this.Produtos.findIndex(j => j.codigo === Produto.codigo);
    if(indice === -1) {
      this.Produtos = [...this.Produtos, Produto];
    } else {
      this.Produtos[indice] = {...Produto};
    }
    console.log(this.Produtos);
  }

  getCodigo() {
    return this.Produtos.length + 1;
  }

  getProduto(codigo: number): Produto {
    return this.Produtos.find(j => j.codigo === codigo);
  }
}

}
