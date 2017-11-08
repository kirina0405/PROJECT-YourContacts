import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Contact } from '../interfaces/contact';
import { ContactSearchService } from '../services/contact-search.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css'],
  providers: [ContactSearchService]
})
export class ContactSearchComponent implements OnInit {
  contactsArray: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private contactSearchService: ContactSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.contactsArray = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.contactSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Contact[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Contact[]>([]);
      });
  }

  gotoDetail(contact: Contact): void {
    const link = ['/detail', contact.id];
    this.router.navigate(link);
  }
}
