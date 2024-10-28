import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: { username: string, password: string }): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    
    const userExists = users.find((u: any) => u.username === user.username);
    if (userExists) {
      return false; 
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true; 
  }

  
  login(user: { username: string, password: string }): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const validUser = users.find((u: any) => u.username === user.username && u.password === user.password);
    
    if (validUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(validUser));
      return true; 
    }
    return false; 
  }


  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }


  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
