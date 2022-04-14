import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { NewMessageDialogComponent } from './new-message-dialog.component';

describe('NewMessageDialogComponent', () => {
  let component: NewMessageDialogComponent;
  let fb: FormBuilder;
  let dialogRefSpy = jasmine.createSpyObj(['close']);

  const formData = {
    author: {
      name: 'John',
      email: 'john@mail.com',
      phone: '12345678',
    },
    message: 'Test'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        {
          provide: MatDialogRef,
          useValue: dialogRefSpy
        }
      ]
    });
    fb = TestBed.inject(FormBuilder);
    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<NewMessageDialogComponent>>;
    dialogRefSpy.close.calls.reset();
    component = new NewMessageDialogComponent(fb, dialogRefSpy);
  });

  it('init', () => {
    component.ngOnInit();

    expect(component.name).toBeInstanceOf(AbstractControl);
    expect(component.email).toBeInstanceOf(AbstractControl);
    expect(component.phone).toBeInstanceOf(AbstractControl);
    expect(component.message).toBeInstanceOf(AbstractControl);
  });

  it('shoud save valid form', () => {
    component.ngOnInit();
    component.form.setValue(formData);

    component.save();

    expect(dialogRefSpy.close).toHaveBeenCalledOnceWith(formData);
  });

  it('should not save invalid form', () => {
    component.ngOnInit();
    component.form.setValue(formData);
    component.email?.setValue('aaa');

    component.save();

    expect(dialogRefSpy.close).toHaveBeenCalledTimes(0);
  });

  it('dismiss', () => {
    component.dismiss();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
