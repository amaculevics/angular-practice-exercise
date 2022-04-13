export interface GuestBookMessage {
  author: GuestBookMessageAuthor
  message: string;
}

export interface GuestBookMessageAuthor {
  name: string;
  email: string;
  phone?: string;
}
