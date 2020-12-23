import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../shared/produto';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.produto = new Produto();    
    
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
    if(codigo) {
      this.produto = this.produtoService.getProduto(codigo);
      if(this.produto.validade instanceof Date) {
        this.produto.validade = this.produto.validade.toISOString();
      }
    } else {
      this.produto.codigo = this.produtoService.getCodigo();
    }
  }

  ngOnInit() {
  }

  salvar() {
    this.produto.preco = parseFloat(this.produto.preco.toString());
    this.produtoService.salvar(this.produto);    
    this.router.navigate(['listagem-produtos']);
  }

}
