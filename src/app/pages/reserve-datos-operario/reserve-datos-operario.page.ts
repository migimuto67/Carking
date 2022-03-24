import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-datos-operario',
  templateUrl: './reserve-datos-operario.page.html',
  styleUrls: ['./reserve-datos-operario.page.scss'],
})
export class ReserveDatosOperarioPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController) { }

  ngOnInit() {
  }
  mostrarMenuOperario(){
    this.menu.enable(true, 'menu-operario');
    this.menuCtrl.open('menu-operario');
  }
}
