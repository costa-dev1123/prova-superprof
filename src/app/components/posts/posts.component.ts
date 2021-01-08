import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../services/posts-service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[] = [];

  constructor(private _postService:PostsService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe((res:any[]) => {
      this.posts = res;
    })
  }

}