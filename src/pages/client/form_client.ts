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

  temp: any;

  cli = {
    $key: "",
    nom_ape: "",
    telef_cel: "",
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
    console.log(navParams.get("element"));
    if (navParams.get("element") != null) {
      this.cli = navParams.get("element");
    }
  }

  createClient() {
    if (this.validarCampos()) {
      this.client = this.database.list("/clients");
      // console.log(this.cli);
      this.client.push({
        nom_ape: this.cli.nom_ape,
        telef_cel: this.cli.telef_cel,
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

  updateClient() {
    if (this.validarCampos()) {
      this.client = this.database.list("/clients");
      // console.log(this.cli);
      this.client.update(this.cli.$key, {
        nom_ape: this.cli.nom_ape,
        telef_cel: this.cli.telef_cel,
        address: this.cli.address,
        dni: this.cli.dni,
        ruc: this.cli.ruc
      });
      this.navCtrl.push(ClientPage);
      this.presentToast("Cliente modificado con éxito");
    } else {
      this.presentToast("Los campos con ( * ) no pueden estar vacios");
    }
  }

  validarCampos() {
    return (
      this.cli.nom_ape != "" &&
      this.cli.telef_cel != "" &&
      this.cli.address != "" &&
      this.cli.dni != ""
    );
  }

  execute() {
    switch (this.accion) {
      case "NUEVO":
        this.createClient();
        break;
      case "EDITAR":
        this.updateClient();
        break;
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
