import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-camara-operario',
  templateUrl: './camara-operario.page.html',
  styleUrls: ['./camara-operario.page.scss'],
})
export class CamaraOperarioPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuOperario(){
    this.menu.enable(true, 'menu-operario');
    this.menuCtrl.open('menu-operario');
  }
}
