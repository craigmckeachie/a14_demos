import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SubscribeEvent } from './email-subscribe/email-subscribe.component';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ message }}</p>
    <app-email-subscribe
      (subscribe)="onSubscribe($event)"
    ></app-email-subscribe>
  `,
  styles: [],
})
export class AppComponent {
  message: string;

  constructor(public datePipe: DatePipe) {

  }

  onSubscribe(subscribeEvent: SubscribeEvent) {
    this.message = `Successfully subscribed at ${
      this.datePipe.transform(subscribeEvent.subscribeDate,'short')
    }. Please check your email ${subscribeEvent.email}and click the link.`;
  }
}
