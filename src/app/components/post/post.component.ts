import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../services/posts-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any = "";
  constructor(private _postService:PostsService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._postService.getPostDetail(this._route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      this.post = res;
    })
  }

}
