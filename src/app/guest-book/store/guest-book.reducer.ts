import { createReducer, on } from '@ngrx/store';
import * as GuestBookActions from './guest-book.actions';
import { GuestBookState } from './guest-book-state';

const initialState: GuestBookState = {
  messages: []
}

export const guestBookReducer = createReducer<GuestBookState>(
  initialState,
  on(GuestBookActions.addNewMessage, (state, action): GuestBookState => {
    return {
      ...state,
      messages: [action.payload, ...state.messages]
    }
  })
);
