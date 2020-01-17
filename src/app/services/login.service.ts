import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userIsLoggedIn: boolean = false

  constructor(private router: Router) { }

  logUserIn() {
    this.userIsLoggedIn = true
  }

  logUserOut() {
    this.userIsLoggedIn = false
  }

  checkUserLoggedInStatus() {
    return this.userIsLoggedIn
  }

  checkLogin(){
    if(this.userIsLoggedIn) {
      return 'ok'
    } else {
      this.router.navigate(['/login'])
    }
  }

  


}
