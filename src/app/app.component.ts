import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ image.url }}</p>
    <p>{{ image.name }}</p>
    <img [src]="image.url" [title]="image.name" />
  `,
  styles: [],
})
export class AppComponent {
  public image = {
    url: './assets/Xkcd_philosophy.png',
    name: 'Xkcd Philosophy',
  };
}
