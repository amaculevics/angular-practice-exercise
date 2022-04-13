import { createAction, props } from '@ngrx/store';
import { GuestBookMessage } from '../models/guest-book';

export const loadGuestBook = createAction('[Guest Book] Load');
export const addNewMessage = createAction(
  '[Guest Book] Add new message',
  props< { payload: GuestBookMessage } >()
);
