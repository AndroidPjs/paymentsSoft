import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { AngularFireModule } from "angularfire2";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import { ClientPage } from "../pages/client/client";
import { FormClientPage } from "../pages/client/form_client";

export const CONFIG = {
  apiKey: "AIzaSyB3lBK8iL6BfTSBPZ1N8LpHEaNZwRsXCU4",
  authDomain: "paymentsoft-43e83.firebaseapp.com",
  databaseURL: "https://paymentsoft-43e83.firebaseio.com",
  projectId: "paymentsoft-43e83",
  storageBucket: "paymentsoft-43e83.appspot.com",
  messagingSenderId: "815244035402"
};

@NgModule({
  declarations: [MyApp, ListPage, LoginPage, ClientPage, FormClientPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage, LoginPage, ClientPage, FormClientPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
