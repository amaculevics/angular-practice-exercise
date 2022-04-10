import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatCardModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
