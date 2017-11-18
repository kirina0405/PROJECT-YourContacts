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

  public contactsArray: Contact[];
  public selectedContact: Contact;

  constructor(

    private http: ContactHttpService,
    private router: Router) { }

    submitted = true;

    onSubmit() { this.submitted = false; }

    getContact(): void {
      this.http
          .getContact()
          .then(response => this.contactsArray = (response as any));
    }

    ngOnInit() {
      this.getContact();
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
