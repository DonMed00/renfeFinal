import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { InfoPage } from "../info/info";
import { CompraPage } from "../compra/compra";
import { ViajesPage } from "../viajes/viajes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private menuCtl: MenuController) {


  }

  mostrarMenu(){
    console.log("Mostrando menú");
    this.menuCtl.toggle();
  }
  verInfo(){
    this.navCtrl.push(InfoPage);
  }
  verHorarios(){
    this.navCtrl.push(CompraPage);
  }
  verViajes(){
    this.navCtrl.push(ViajesPage);
  }

}
