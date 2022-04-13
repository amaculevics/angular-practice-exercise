import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BlogRoutingModule } from './blog-routing.module';
import { MaterialModule } from '../shared/material.module';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostService } from './services/post.service';
import { BlogReducer, BlogEffects } from './store';
import { FEATURE_KEY } from './store/blog-state';
import { SharedModule } from '../shared/shared.module';
import { SearchPostsComponent } from './search-posts/search-posts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    SearchPostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_KEY, BlogReducer.blogReducer),
    EffectsModule.forFeature([BlogEffects.BlogEffects]),
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
