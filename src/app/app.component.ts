import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public afAuth:AngularFireAuth, public router: Router) {}
  logout(){
    this.afAuth.signOut().then( () => {
      this.router.navigateByUrl('/home');
    });
  }
}
