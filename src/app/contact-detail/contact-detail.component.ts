import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Contact } from '../interfaces/contact';
import { ContactHttpService } from '../services/contact-http.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  public id;
  // public contact = {};
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private http: ContactHttpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      this.getContact(this.id);
    });
  }

  getContact(id) {
    this.http.getContact(id).then(res => {
      this.contact = res;
    });
  }

  edit(): void {
    this.http.updateContact(this.contact)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
