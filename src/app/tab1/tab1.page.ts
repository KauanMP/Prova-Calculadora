import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public valor1: number;
public valor2: number;

public resultado: number;
public operacao = '';

constructor(private alertController: AlertController) {}

  fzrSoma() {
    // this.resultado = this.valor1 +
    this.operacao = 'soma';
    return this.resultado = Number(this.valor1) + Number(this.valor2);
  }

  fzrSubtracao(){
    this.operacao = 'subtração';
    return this.resultado = Number(this.valor1) - Number(this.valor2);
  }

  fzrMultiplicacao(){
    this.operacao = 'Multiplicação';
    return this.resultado = Number(this.valor1) * Number(this.valor2);
  }

  fzrDivisao(){
    this.operacao = 'Divisão';
    return this.resultado = Number(this.valor1) / Number(this.valor2);
  }

  async clear(){
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;
    this.operacao = '';
  }

  async descoMaior(){
    if (Number(this.valor1) > Number(this.valor2) || Number(this.valor2) < Number(this.valor1)) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: (`${this.valor1}`),
        buttons: ['OK'],
      });
      await alert.present();
    }

    else if (Number(this.valor2) > Number(this.valor1) || Number(this.valor1) < Number(this.valor2)) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: (`${this.valor2}`),
        buttons: ['OK'],
      });
      await alert.present();
    }

      else {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: (`Os numeros são iguais`),
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async descoMenor(){
    if (Number(this.valor1) < Number(this.valor2) || Number(this.valor2) > Number(this.valor2)) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: (`${this.valor1}`),
        buttons: ['OK'],
      });
      await alert.present();
    }

    else if (Number(this.valor2) < Number(this.valor1) || Number(this.valor1) > Number(this.valor2)) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: (`${this.valor2}`),
        buttons: ['OK'],
      });
      await alert.present();
    }

      else {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: (`Os numeros são iguais`),
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

}

