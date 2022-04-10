import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsResolverService } from './posts-resolver.service';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: { posts: PostsResolverService }
  },
  {
    path: ':id',
    component: PostDetailsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
