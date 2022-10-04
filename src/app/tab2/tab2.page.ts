import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao = '';
  resultado = '';

  constructor() {}

  ngOnInit(): void {}

  adicionarValor(valor: string) {
    this.operacao += valor;
  }

  limparOperacao(){
    this.operacao = '';

  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';

  }

  apagarCaracter(){
    this.operacao = this.operacao.substring(0, this.operacao.length -1);

  }

}
