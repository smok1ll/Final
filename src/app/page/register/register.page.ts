import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.authService.register({ username: this.username, password: this.password })) {
      this.router.navigate(['/tab-inicial/inicio']);
    } else {
      this.errorMessage = 'El usuario ya está registrado';
    }
  }


  ngOnInit() {
  }

}
