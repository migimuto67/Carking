import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-space-user',
  templateUrl: './reserve-space-user.page.html',
  styleUrls: ['./reserve-space-user.page.scss'],
})
export class ReserveSpaceUserPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
    mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
  }
}
