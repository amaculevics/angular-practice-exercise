import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Post } from './post';
import { Observable } from 'rxjs';
import { PostComment } from './post-comment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getPostComments(): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.apiUrl}/comments`);
  }
}
