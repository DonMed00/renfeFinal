import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/internal/Observable";
import { AngularFireDatabase } from "@angular/fire/database";

/**
 * Generated class for the ViajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viajes',
  templateUrl: 'viajes.html',
})
export class ViajesPage {
  viajes: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afDB: AngularFireDatabase) {
                this.viajes = afDB.list('viajes').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPage');
  }

}
