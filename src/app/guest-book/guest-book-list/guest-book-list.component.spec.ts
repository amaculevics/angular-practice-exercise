import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { GuestBookMessage } from '../models/guest-book';
import { GuestBookActions, GuestBookSelectors } from '../store';
import { GuestBookListComponent } from './guest-book-list.component';

describe('GuestBookListComponent', () => {
  let component: GuestBookListComponent;
  let store: MockStore;
  let dialogSpy = jasmine.createSpyObj(['open']);
  let dialogRefSpy = jasmine.createSpyObj(['afterClosed']);
  let snackbarSpy = jasmine.createSpyObj(['open']);

  const dummyMessages: GuestBookMessage[] = [
    {
      author: {
        name: 'John',
        email: 'john@mail.com',
        phone: '12345678'
      },
      message: 'Test message'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          selectors: [
            { selector: GuestBookSelectors.selectGuestBookMessages, value: dummyMessages }
          ]
        }),
        {
          provide: MatDialog,
          useValue: dialogSpy
        },
        {
          provide: MatSnackBar,
          useValue: snackbarSpy
        }
      ]
    });

    store = TestBed.inject(MockStore);
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    snackbarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    component = new GuestBookListComponent(store, dialogSpy, snackbarSpy);
  });

  it('init', () => {
    const spy = spyOn(store, 'dispatch');
    component.ngOnInit();
    component.guestBookMessages$.subscribe(messages => {
      expect(messages).toEqual(dummyMessages);
    })
  });

  it('addMessage', () => {
    const storeSpy = spyOn(store, 'dispatch');
    dialogSpy.open.and.returnValue(dialogRefSpy);
    dialogRefSpy.afterClosed.and.returnValue(of(dummyMessages[0]));
    component.addMessage();
    expect(storeSpy).toHaveBeenCalledOnceWith(GuestBookActions.addNewMessage({ payload: dummyMessages[0] }))
    expect(snackbarSpy.open).toHaveBeenCalled()
  });
})
