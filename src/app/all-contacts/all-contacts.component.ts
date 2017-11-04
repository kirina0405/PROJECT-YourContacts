import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../interfaces/contact';
import { ContactHttpService } from '../services/contact-http.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  public contactsArray = [];
  public selectedContact: Contact;

    // public contact: Contact = {
    //   id: 0,
    //   firstName: '',
    //   secondName: ''
    // };

    // private defaultContact: Contact = {
    //   id: 0,
    //   firstName: '',
    //   secondName: ''
    // };

    constructor(
      private http: ContactHttpService,
      private router: Router) { }

    ngOnInit() {
      this.http.getContact().then(response => {
        console.log(response);
        this.contactsArray = (response as any);
      });
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.http.createContact(name)
        .then(contact => {
          this.contactsArray.push(contact);
          this.selectedContact = null;
        });
    }

    delete(contact: Contact): void {
      this.http
          .deleteContact(contact.id)
          .then(() => {
            this.contactsArray = this.contactsArray.filter(h => h !== contact);
            if (this.selectedContact === contact) { this.selectedContact = null; }
          });
    }
}
