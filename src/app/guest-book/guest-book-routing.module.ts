import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestBookListComponent } from './guest-book-list/guest-book-list.component';

const routes: Routes = [
  { path: '', component: GuestBookListComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GuestBookRoutingModule { }
