import { FormDeudasPage } from './form_deudas';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
@Component({
    selector: "page-clients",
    templateUrl: "clients.html"
})
export class ClientsPage {
    clients: FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, public database: AngularFireDatabase) {
        this.clients = this.database.list("/clients");
        // console.log(this.clients);
    }

    selectedClient(client) {
        // console.log(client);
        this.navCtrl.push(FormDeudasPage);
    }
}