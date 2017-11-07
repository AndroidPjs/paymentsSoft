import { ClientPage } from "./client";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import { NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { ToastController } from "ionic-angular";

@Component({
  selector: "page-formclient",
  templateUrl: "form_client.html"
})
export class FormClientPage {
  accion: string = "TEST";
  color: string;

  cli = {
    nomApe: "",
    telefCel: "",
    address: "",
    dni: "",
    ruc: ""
  };

  client: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public database: AngularFireDatabase,
    private toastCtrl: ToastController
  ) {
    this.accion = navParams.get("action");
    this.color = navParams.get("color");
  }

  guardar() {
    if (
      this.cli.nomApe != "" &&
      this.cli.telefCel != "" &&
      this.cli.address != "" &&
      this.cli.dni != ""
    ) {
      this.client = this.database.list("/clients");
      // console.log(this.cli);
      this.client.push({
        nom_ape: this.cli.nomApe,
        telef_cel: this.cli.telefCel,
        address: this.cli.address,
        dni: this.cli.dni,
        ruc: this.cli.ruc
      });
      this.navCtrl.push(ClientPage);
      this.presentToast("Cliente creado con éxito");
    } else {
      this.presentToast("Los campos con ( * ) no pueden estar vacios");
    }
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: "top"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }
}
