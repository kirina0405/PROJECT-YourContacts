import { Component, OnInit } from '@angular/core';

import { Contact } from '../interfaces/contact';
import { ContactHttpService } from '../services/contact-http.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  constructor(private http: ContactHttpService) { }

  public contactsArray = [];

    public contact: Contact = {
      id: 0,
      firstName: '',
      secondName: ''
    };

    private defaultContact: Contact = {
      id: 0,
      firstName: '',
      secondName: ''
    };

    ngOnInit() {
      this.http.getContact().then(response => {
        console.log(response);
        this.contactsArray = (response as any);
      });
    }

}
