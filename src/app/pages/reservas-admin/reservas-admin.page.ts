import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reservas-admin',
  templateUrl: './reservas-admin.page.html',
  styleUrls: ['./reservas-admin.page.scss'],
})
export class ReservasAdminPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuAdmin(){
    this.menu.enable(true, 'menu-admin');
    this.menuCtrl.open('menu-admin');
  }
}