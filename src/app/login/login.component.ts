import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(this.loginService.checkUserLoggedIn()) this.loggedInRedirectToHome()
  }

  loggedInRedirectToHome() {
    this.router.navigate(['/home'])
  }

  logUserIn() {
    this.loginService.logUserIn()
    this.loggedInRedirectToHome()
  }

}
