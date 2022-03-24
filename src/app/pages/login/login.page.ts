import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private navCtrl: NavController, private authSvc: AuthService, private router: Router) { }
  gotoRegister(){
    this.navCtrl.navigateForward('register')
  }


  ngOnInit() {
  }
  //iniciar sesion con correo y contraseña
  async onLogin(email, password){
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user){
        //verificación de correo
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
  //inicio de sesion con google
  async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle();
      if(user){
        //verificación de correo
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
  //redireccionar a diferentes vistas si el coreo esta verificado o no
  private redirectUser(isVerifed:boolean): void{
    //si esta verificado se le permite al usuario el ingreso
    if(isVerifed){
      this.router.navigate(['home-user']);
    }
    //si el correo no esta verificado se redirecciona al usuario hacia la verificacion de correo
    else{
      //redireccionar a la pagina de verificación
      this.router.navigate(['verify-email']);
    }    
  }
}
