import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-pago-user',
  templateUrl: './reserve-pago-user.page.html',
  styleUrls: ['./reserve-pago-user.page.scss'],
})
export class ReservePagoUserPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
    }
}
