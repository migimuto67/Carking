import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-conf-operario',
  templateUrl: './reserve-conf-operario.page.html',
  styleUrls: ['./reserve-conf-operario.page.scss'],
})
export class ReserveConfOperarioPage implements OnInit {

  constructor(  private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuOperario(){
    this.menu.enable(true, 'menu-operario');
    this.menuCtrl.open('menu-operario');
  }
}
