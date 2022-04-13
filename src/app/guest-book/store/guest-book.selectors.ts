import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, GuestBookState } from './guest-book-state';

const selectGuestBookFeatureState = createFeatureSelector<GuestBookState>(FEATURE_KEY);

export const selectGuestBookMessages = createSelector(
  selectGuestBookFeatureState,
  state => state.messages
)
