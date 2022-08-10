import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLinkActive="highlight" [routerLink]="['/home']">Home</a> |
      <a routerLinkActive="highlight" [routerLink]="['/about']">About</a> |
      <a routerLinkActive="highlight" [routerLink]="['/contact']">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
