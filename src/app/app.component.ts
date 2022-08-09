import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a href="" (click)="onClick($event)">Click Me!</a>
    <p>{{ message }}</p>
  `,
  styles: [],
})
export class AppComponent {
  message = '';

  onClick(event: Event) {
    console.log(event);

    event.preventDefault();
    this.message = 'clicked';
  }
}
