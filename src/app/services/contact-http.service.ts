import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../interfaces/contact';

@Injectable()
export class ContactHttpService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private contactsUrl = 'http://localhost:3000/contacts';
  contacts: Contact[] = [];

  constructor(private http: Http) { }

  getContact(id?): Promise<Contact[]> {

      return this.http.get(`${this.contactsUrl}/${id ? id : ''}`)
                  .toPromise()
                  .then(res => res.json())
                  .then(contacts => this.contacts = contacts)
                  .catch(this.handleError);
      }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
