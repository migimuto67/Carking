import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { reservas } from '../../models';


@Component({
  selector: 'app-reserve-user',
  templateUrl: './reserve-user.page.html',
  styleUrls: ['./reserve-user.page.scss'],
})
export class ReserveUserPage implements OnInit {
  newReserve: reservas = {
    nombre: '',
    documento: null,
    telefono: null,
    placa: '',
    fecha: '',
  };
  private path = 'reservas/';
  constructor( private menuCtrl: MenuController, private menu: MenuController, public FirebaseService: FirebaseService) {

   }
    
  ngOnInit() {
  }
  mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
  }

  guardarReserva(){

    
    const id = this.FirebaseService.getId();
    this.FirebaseService.createDoc(this.newReserve, this.path, id);
  }
}
