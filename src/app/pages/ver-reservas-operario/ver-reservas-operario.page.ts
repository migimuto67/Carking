import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ver-reservas-operario',
  templateUrl: './ver-reservas-operario.page.html',
  styleUrls: ['./ver-reservas-operario.page.scss'],
})
export class VerReservasOperarioPage implements OnInit {

  constructor(private menuCtrl: MenuController, private menu: MenuController) { }

  ngOnInit() {
  }
  mostrarMenuOperario(){
    this.menu.enable(true, 'menu-operario');
    this.menuCtrl.open('menu-operario');
  }
}
