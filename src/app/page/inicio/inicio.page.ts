import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loggedInUser: any;
  
  constructor(private authService: AuthService, private router: Router) {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (!this.loggedInUser.username) {
      this.router.navigate(['/login']);
    }
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {  
  }
  

}
