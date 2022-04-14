import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.css']
})
export class NewMessageDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewMessageDialogComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      author: this.fb.group({
        name: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        phone: this.fb.control(''),
      }),
      message: this.fb.control('', Validators.required)
    })
  }

  get name() { return this.form.get('author.name'); }
  get email() { return this.form.get('author.email'); }
  get phone() { return this.form.get('author.phone'); }
  get message() { return this.form.get('message'); }

  save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;
    this.dialogRef.close(this.form.value);
  }

  dismiss() {
    this.dialogRef.close();
  }

}
