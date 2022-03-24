import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-operarios-admin',
  templateUrl: './operarios-admin.page.html',
  styleUrls: ['./operarios-admin.page.scss'],
})
export class OperariosAdminPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController, public alertController: AlertController ) { }

  ngOnInit() {
  }
  mostrarMenuAdmin(){
    this.menu.enable(true, 'menu-admin');
    this.menuCtrl.open('menu-admin');
  }
  async alertAdmin() {
    const alert = await this.alertController.create({
      header: 'Registrar operario',
      inputs: [
        {
          name: 'name',
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
