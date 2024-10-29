import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(public router:Router, public toastController:ToastController,private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    if (this.authService.login({ username: this.username, password: this.password })) {
      this.router.navigate(['/tab-inicial/inicio']);
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }

}
