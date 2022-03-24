import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-conf-user',
  templateUrl: './reserve-conf-user.page.html',
  styleUrls: ['./reserve-conf-user.page.scss'],
})
export class ReserveConfUserPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController, public alertController: AlertController ) { }

  ngOnInit() {
  }
  mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
    
  };
  async cancelAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Deseas cancelar tu reserva?',
      buttons: [
        {
        text: 'No',
        role: 'cancel'
        },
        {
          text: 'Si',
          handler(){
            
        }
      }]
    });

    await alert.present();
  }

  async alertUser() {
    const alert = await this.alertController.create({
      header: 'Editar mis datos',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'nombre'
        },
        // multiline input.
        {
          name: 'documento',
          id: 'documento',
          type: 'number',
          placeholder: 'documento'
        },
        {
          name: 'telefono',
          id: 'telefono',
          type: 'tel',
          placeholder: 'telefono'
        },
        {
          name: 'tipo de vehiculo',
          id: 'vehiculo',
          type: 'text',
          placeholder: 'tipo de vehiculo'
        },
        {
          name: 'placa',
          id: 'placa',
          type: 'text',
          min: '6',
          max: '6',
          placeholder: 'tipo de vehiculo'
        },
        // input date with min & max
        {
          name: 'fecha de entrada',
          type: 'date',
          min: '2022-02-01',
          max: '2030-01-12'
        },
        // input date without min nor max
        {
          name: 'fecha de salida',
          type: 'date'
        },
        {
          name: 'hora de llegada',
          type: 'time',
          placeholder: 'hora de llegada'
        },
        {
          name: 'hora de salida',
          type: 'time',
          placeholder: 'hora de salida'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data:any ) => {
            console.log('data');
          }
        }
      ]
    });

    await alert.present();
  }
}
