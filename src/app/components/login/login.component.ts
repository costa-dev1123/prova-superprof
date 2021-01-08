import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
currentUser: any;
  invalidLogin:boolean;
  title:string = 'Loggati';
  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  login(credentials){
    this._authService.login(credentials)
    .subscribe()
  }

}
