import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h3>Sign In</h3>
    <form [formGroup]="signinForm" (ngSubmit)="onSubmit()">
      <input
        formControlName="username"
        type="text"
        placeholder="username"
        name="username"
      />

      <div
        *ngIf="
          signinForm.get('username').invalid &&
          signinForm.get('username').touched &&
          signinForm.get('username').dirty
        "
      >
        <div *ngIf="signinForm.get('username').hasError('required')">
          Username is required.
        </div>
        <div *ngIf="signinForm.get('username').hasError('minlength')">
          Please make it longer.
        </div>
      </div>

      <input
        formControlName="password"
        type="password"
        placeholder="password"
        name="password"
      />
      <button>Sign In</button>
    </form>
    <pre *ngIf="signinForm.get('username').errors">
      {{ signinForm.get('username').errors | json }}
    </pre
    >
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  signinForm: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [],
    });
    // this.signinForm = new FormGroup(
    //   {
    //     username: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(3),
    //     ]),
    //     password: new FormControl(),
    //   },
    //   { updateOn: 'blur' }
    // );
  }

  onSubmit() {
    console.log(this.signinForm.value);
  }
}
