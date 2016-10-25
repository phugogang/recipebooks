import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-home',
  template: `
    <h1>
      This is the Home page recipe lazy Routing!
    </h1>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
