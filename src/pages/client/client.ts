import { NavController } from "ionic-angular";
import { Component } from "@angular/core";
import { FormClientPage } from "./form_client";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";

@Component({
  selector: "page-client",
  templateUrl: "client.html"
})
export class ClientPage {
  clients: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public database: AngularFireDatabase
  ) {
    this.clients = this.database.list("/clients");
    console.log(this.clients);
  }

  newClient() {
    this.navCtrl.push(FormClientPage, {
      action: "NUEVO",
      color: "primary"
    });
  }

  modifyClient(client) {
    this.navCtrl.push(FormClientPage, {
      action: "EDITAR",
      color: "secondary",
      element: client
    });
  }
}
