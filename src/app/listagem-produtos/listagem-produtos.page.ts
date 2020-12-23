import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../shared/produto';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.page.html',
  styleUrls: ['./listagem-produtos.page.scss'],
})
export class ListagemProdutosPage implements OnInit {

  lista: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {
    this.listar();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    this.lista = this.produtoService.getProdutos();
  }

  editar(Produto: Produto) {
    this.router.navigate(['cadastro', Produto.codigo]);
  }

  excluir(Produto: Produto) {
    this.produtoService.excluir(Produto);
    this.listar();
  }

}
