import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, LoadingController, AlertController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CompraPage } from "../pages/compra/compra";

import { HomePage } from '../pages/home/home';
import { UsuarioProvider } from "../providers/usuario/usuario";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild('content') navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl : MenuController,
              public usuarioProvider: UsuarioProvider,
              private alertCtrl : AlertController,
              private loadingCtrl: LoadingController,) {
    platform.ready().then(() => {
      usuarioProvider.cargarStorage().then( existe => {
        statusBar.styleDefault();
        splashScreen.hide();
        if(existe){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
      });

    });
  }

  salir() {
    let loading = this.loadingCtrl.create({
      content : "Cerrando Sesión..",
      spinner: 'crescent',
      duration: 500
    });
      let alert = this.alertCtrl.create({
          title: 'Salir',
          message: '¿Deseas cerrar sesión?',
          buttons: [
              {
                  text: 'No',
                  handler: () => {
                      console.log('Cancel clicked');
                      this.menuCtrl.close();
                  }
              },
              {
                  text: 'Si',
                  handler: () => {
                    loading.present();
                    this.usuarioProvider.borrarUsuario();
                    this.menuCtrl.close();
                    this.navCtrl.setRoot(LoginPage);

                  }
              }
          ]
      });
      alert.present();
    }


  }
