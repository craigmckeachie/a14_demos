import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-email-subscribe',
  template: `
    <input type="text" placeholder="email" #myInput />
    <button (click)="onSubscribeClick(myInput)">Subscribe</button>
  `,
  styles: [],
})
export class EmailSubscribeComponent implements OnInit {
  @Output()
  subscribe = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubscribeClick(input) {
    this.subscribe.emit(new SubscribeEvent(input.value, new Date()));
  }
}

export class SubscribeEvent {
  constructor(public email: string, public subscribeDate: Date) {}
}
