import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../interfaces/contact';

@Injectable()
export class ContactHttpService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private contactsUrl = 'http://localhost:3000/contacts';
  private contact;

  constructor(private http: Http) { }

  getContact(id?): Promise<Contact> {
    return this.http
      .get(`${this.contactsUrl}/${id ? id : ''}`)
      .toPromise()
      .then(res => res.json())
      .then(contact => this.contact = contact)
      .catch(this.handleError);
    }

  createContact(contact): Promise<Contact> {
    return this.http
      .post(this.contactsUrl, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  updateContact(contact: Contact): Promise<Contact> {
    return this.http
      .put(`${this.contactsUrl}/${contact.id}`, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  deleteContact(id?): Promise<void> {
      return this.http.delete(`${this.contactsUrl}/${id}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
