import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userIsLoggedIn: boolean = false

  constructor() { }

  logUserIn() {
    this.userIsLoggedIn = true
  }

  logUserOut() {
    this.userIsLoggedIn = false
  }

  checkUserLoggedIn() {
    return this.userIsLoggedIn
  }


}
