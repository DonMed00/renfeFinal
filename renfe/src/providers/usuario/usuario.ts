import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {
  clave: string;
  user: any = {};

  constructor( private afbd: AngularFirestore,
              private platform: Platform,
              private storage: Storage) {


                }

  verificarUsuario(clave: string){
    return new Promise( (resolve, reject) => {
      this.afbd.doc(`/usuarios/${ clave }`)
      .valueChanges().subscribe( data => {
        if(data){
          this.clave = clave;
          this.user = data;
          this.guardarStorage();
          resolve(true);
        }else {
          resolve(false);
        }
      })
    })
  }

  guardarStorage(){
    if(this.platform.is('cordova')){
      this.storage.set('clave', this.clave);
    }else {
      localStorage.setItem('clave', this.clave);
    }
  }



  cargarStorage(){
    return new Promise( (resolve, reject) => {
      if(this.platform.is('cordova')) {
        this.storage.get('clave').then( val => {
          if(val){
            this.clave = val;
            resolve(true);
          }else {
            resolve(false);
          }
        });
      }else {
        if(localStorage.getItem('clave')){
          this.clave= localStorage.getItem('clave');
          resolve(true);
        }else{
          resolve(false);

        }
      }
    });
  }

  borrarUsuario(){
    this.clave = null;
    if (this.platform.is('cordova')){
      this.storage.remove('clave');
    }else{
      localStorage.removeItem('clave');
    }
  }

}
