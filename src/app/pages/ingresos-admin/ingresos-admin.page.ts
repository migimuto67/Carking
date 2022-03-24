import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos-admin',
  templateUrl: './ingresos-admin.page.html',
  styleUrls: ['./ingresos-admin.page.scss'],
})
export class IngresosAdminPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuAdmin(){
    this.menu.enable(true, 'menu-admin');
    this.menuCtrl.open('menu-admin');
  }
}
