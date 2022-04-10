import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['id'];
      if (postId) {
        forkJoin({
          posts: this.postService.getPosts(),
          comments: this.postService.getPostComments()
        }).subscribe(resp => {
          this.post = resp.posts.find(post => post.id === postId);
          let postComments = resp.comments.filter(comment => comment.postId === postId);

          if (this.post && postComments.length > 0) {
            this.post!.comments = postComments;
          }
        })
      }
    })
  }
}
