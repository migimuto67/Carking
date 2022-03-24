import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.page.html',
  styleUrls: ['./map-user.page.scss'],
})
export class MapUserPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
  }
}
