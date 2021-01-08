import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http:HttpClient) { }
  getPosts(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getPostDetail(id){
    return this._http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }
}