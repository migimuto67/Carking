import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reserve-space-operario',
  templateUrl: './reserve-space-operario.page.html',
  styleUrls: ['./reserve-space-operario.page.scss'],
})
export class ReserveSpaceOperarioPage implements OnInit {

  constructor(private menuCtrl: MenuController, private menu: MenuController) { }

  ngOnInit() {
  }
  mostrarMenuOperario(){
    this.menu.enable(true, 'menu-operario');
    this.menuCtrl.open('menu-operario');
  }
}
