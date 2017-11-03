import { Component, OnInit } from '@angular/core';

import { Contact } from './interfaces/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Контакти';

  ngOnInit() {
    console.log('init');
  }
}
