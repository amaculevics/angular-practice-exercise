import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<any> {

  constructor(private postService: PostService) { }

  resolve() {
    return this.postService.getPosts().pipe(posts => posts);
  }
}
