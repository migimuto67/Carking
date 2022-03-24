import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-myreserve-user',
  templateUrl: './myreserve-user.page.html',
  styleUrls: ['./myreserve-user.page.scss'],
})
export class MyreserveUserPage implements OnInit {

  constructor( private menuCtrl: MenuController, private menu: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenuUser(){
    this.menu.enable(true, 'menu-user');
    this.menuCtrl.open('menu-user');
  }
}
