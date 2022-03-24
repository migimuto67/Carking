import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-datos-user',
  templateUrl: './reserve-datos-user.page.html',
  styleUrls: ['./reserve-datos-user.page.scss'],
})
export class ReserveDatosUserPage implements OnInit {

  constructor(  private menuCtrl: MenuController, private menu: MenuController  ) { }

  ngOnInit() {
  }
  mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
  }
}
