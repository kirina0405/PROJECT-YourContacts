import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Contact } from '../interfaces/contact';
import { ContactSearchService } from '../services/contact-search.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css'],
})
export class ContactSearchComponent implements OnInit {

  contactsArray$: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactSearchService: ContactSearchService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.contactsArray$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.contactSearchService.searchContactsArray(term)),
    );
  }
}
