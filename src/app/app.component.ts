import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">
        {{ fruit }}
      </li>
    </ul>
  `,
  styles: [],
})
export class AppComponent {
  fruits = ['Kiwi', 'Apple', 'Strawberry', 'Mango'];
}
