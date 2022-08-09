import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      <input
        formControlName="password"
        type="password"
        placeholder="password"
        name="password"
      />
      <button>Sign In</button>
    </form>
    <pre>
      {{ signinForm.value | json }}
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
      username: [],
      password: [],
    });
    // this.signinForm = new FormGroup({
    //   username: new FormControl(),
    //   password: new FormControl(),
    // });
  }

  onSubmit() {
    console.log(this.signinForm.value);
  }
}
