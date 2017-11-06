import { NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
@Component({
  selector: "page-formclient",
  templateUrl: "form_client.html"
})
export class FormClientPage {
  accion: string = "TEST";
  color: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.accion = navParams.get("action");
    this.color = navParams.get("color");
  }
}
