import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { GuestBookRoutingModule } from './guest-book-routing.module';
import { MaterialModule } from '../shared/material.module';

import { GuestBookListComponent } from './guest-book-list/guest-book-list.component';
import { GuestBookReducer } from './store';
import { FEATURE_KEY } from './store/guest-book-state';
import { SharedModule } from '../shared/shared.module';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GuestBookListComponent,
    NewMessageDialogComponent
  ],
  imports: [
    CommonModule,
    GuestBookRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_KEY, GuestBookReducer.guestBookReducer),
  ]
})
export class GuestBookModule { }
