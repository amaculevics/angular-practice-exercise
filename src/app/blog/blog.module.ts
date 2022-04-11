import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostRoutingModule } from './blog-routing.module';
import { PostService } from './post.service';
import { PostListComponent } from './post-list/post-list.component';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/blog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './store/blog.effects';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    StoreModule.forFeature('blog', blogReducer),
    EffectsModule.forFeature([BlogEffects]),
    MatCardModule
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
