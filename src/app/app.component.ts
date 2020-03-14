import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = 'Máscaras ';
  phone: number;
  precioAuto: number = 0;
  peso: number = 0;


  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  placaAuto = {
    mask: [/[A-Z]/, /[A-Z]/, /[A-Z]/, '-', /\d/, /\d/, /\d/, /\d/],
    guide: false
  };

  cedulaMask = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
    guide: false

  };

  configuracionMascaraPeso = {
    prefix: '',
    suffix: 'Kg',
    align: 'left',
    thousands: '.',
    decimal: ',',
    precision: 4
  };


  constructor() {
  }

}
