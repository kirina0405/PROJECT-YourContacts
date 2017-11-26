import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';

import 'rxjs/add/operator/map';

import { Contact } from '../interfaces/contact';


@Injectable()
export class ContactSearchService {

  private contactsUrl = 'http://localhost:3000/contacts';

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  searchContactsArray(term: string): Observable<Contact[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Contact[]>(`http://localhost:3000/contacts/?firstName=${term}`).pipe(
      // tap(_ =>this.log(`found contactsArray matching "${term}"`)),
      catchError(this.handleError<Contact[]>('searchContactsArray', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

    // private log(message: string) {
    //   this.messageService.add('ContactSearchService: ' + message);
    // }
  }
