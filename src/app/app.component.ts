import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">
        {{ fruit }}
      </li>
    </ul>
    <div [ngSwitch]="fruits.length">
      <p *ngSwitchCase="0">No records returned.</p>
      <p *ngSwitchCase="1">1 record returned.</p>
      <p *ngSwitchDefault>{{ fruits.length }} records were returned.</p>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  // fruits = ['Kiwi', 'Apple', 'Strawberry', 'Mango'];
  fruits = ['Kiwi'];
  // fruits = [];
}
