import { NavController } from "ionic-angular";
import { Component } from "@angular/core";
import { FormClientPage } from "./form_client";

@Component({
  selector: "page-client",
  templateUrl: "client.html"
})
export class ClientPage {
  constructor(public navCtrl: NavController) {}

  newClient() {
    this.navCtrl.push(FormClientPage, {
      action: "NUEVO",
      color: "primary"
    });
  }

  modifyClient() {
    this.navCtrl.push(FormClientPage, {
      action: "EDITAR",
      color: "secondary"
    });
  }
}
