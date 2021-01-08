import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { basePath } from './../helpers/constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser: any;
  constructor(private _http:HttpClient) {
    let token = localStorage.getItem('token');
    if(token){
      let jwt = jwt_decode(token);
      this.currentUser = jwt
    }
   }


   login(credentials){
       return this._http.post(basePath+'proc/login_nuovo.asp', credentials)
   }

   logout(){
     return this._http.get(basePath+'lotnew/close.asp')
   }
}
