import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from '../interfaces/contact';

@Injectable()
export class ContactSearchService {

  constructor(private http: Http) { }
  search(term: string): Observable<Contact[]> {
    return this.http
               .get(`api/contactsArray/?firstName=${term}`)
               .map(response => response.json().data as Contact[]);
  }}
