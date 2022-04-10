import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['posts'];
  }

}
