import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuAdmin(){
    this.menu.enable(true, 'menu-admin');
    this.menuCtrl.open('menu-admin');
  }
}
