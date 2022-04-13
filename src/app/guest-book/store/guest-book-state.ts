import { GuestBookMessage } from '../models/guest-book';

export const FEATURE_KEY = 'guest-book';

export interface GuestBookState {
  messages: GuestBookMessage[]
}
