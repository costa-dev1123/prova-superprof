import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _route: Router, private _authService: AuthService) { }
  currentUser: any
  isLoggedin: boolean;
  ngOnInit(): void {
    if (localStorage.getItem('token'))
      this.currentUser = jwt_decode(localStorage.getItem('token'))['name'];
    else
      this._route.navigate(['/login'])
  }

  logout() {
    this._authService.logout().subscribe(res => {
      console.log(res);
      this.isLoggedin = true;
      this._route.navigate(['/'])
    })
  }
}
