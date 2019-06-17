import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/internal/Observable";
import { AngularFireDatabase } from "@angular/fire/database";

/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {
horarios: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afDB: AngularFireDatabase) {
      this.horarios = afDB.list('horarios').valueChanges();
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }

}
