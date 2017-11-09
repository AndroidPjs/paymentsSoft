import { ToastController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
 
@Component({
    selector:"page-formdeudas",
    templateUrl:"form_deudas.html"
})
export class FormDeudasPage{
    accion:string;

    deudas: FirebaseListObservable<any>;

    cliente:any;

    deuda={
        $key:"",
        fecha:"",
        total:""
    };

    constructor(public navCtrl: NavController,
        private navParams: NavParams,
        public database: AngularFireDatabase,
        private toastCtrl: ToastController){
            this.cliente=navParams.get("cliente");
        }

    execute(){
        // this.deuda =this.database.
        // this.navCtrl.push()
    }
}