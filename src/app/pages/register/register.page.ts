import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:any;
  password:any;

  constructor(private navCtrl: NavController, private authSvc:AuthService, private router: Router) { }



  //funcion para ir a la pagina login
  gotoLogin(){
    this.navCtrl.navigateForward('login')
  }

  ngOnInit() {
  }
  async onRegister(email, password){
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user){
        //verificar si el email esta verificado
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } 
    catch (error) {
      console.log('Error', error)
    }
  }
  private redirectUser(isVerifed:boolean): void{
    if(isVerifed){
      this.router.navigate(['home-user']);
    }
    else{
      //redireccionar a la pagina de verificación
      this.router.navigate(['verify-email']);
    }    
  }
}
