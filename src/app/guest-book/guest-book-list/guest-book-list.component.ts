import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GuestBookMessage } from '../models/guest-book';
import { NewMessageDialogComponent } from '../new-message-dialog/new-message-dialog.component';
import { GuestBookActions, GuestBookSelectors } from '../store';

@Component({
  selector: 'app-guest-book-list',
  templateUrl: './guest-book-list.component.html',
  styleUrls: ['./guest-book-list.component.css']
})
export class GuestBookListComponent implements OnInit {
  guestBookMessages$: Observable<GuestBookMessage[]> = of([]);
  errorMessage$: Observable<string> = of('');

  constructor(private store: Store,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.store.dispatch(GuestBookActions.loadGuestBook());
    this.guestBookMessages$ = this.store.select(GuestBookSelectors.selectGuestBookMessages);
  }

  addMessage() {
    let dialogRef = this.dialog.open(NewMessageDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(GuestBookActions.addNewMessage({ payload: <GuestBookMessage>result }));
        this.snackBar.open('Message added', undefined, { duration: 5000 });
      }
    })
  }

}
