import { ClientsPage } from './clients';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: "page-deudas",
  templateUrl: "deudas.html"
})
export class DeudasPage {
  constructor(public navCtrl: NavController) {

  }

  newDeuda() {
    this.navCtrl.push(ClientsPage);
  }
}
