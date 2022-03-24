import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-operario',
  templateUrl: './home-operario.page.html',
  styleUrls: ['./home-operario.page.scss'],
})
export class HomeOperarioPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuOperario(){
    this.menu.enable(true, 'menu-operario');
    this.menuCtrl.open('menu-operario');
  }
}