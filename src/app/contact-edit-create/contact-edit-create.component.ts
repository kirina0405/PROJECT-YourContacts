import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/switchMap';

import { Contact } from '../interfaces/contact';
import { ContactHttpService } from '../services/contact-http.service';

@Component({
  selector: 'app-contact-edit-create',
  templateUrl: './contact-edit-create.component.html',
  styleUrls: ['./contact-edit-create.component.css']
})
export class ContactEditCreateComponent implements OnInit {

  public id;
  public contact: Contact = {
    id: 0,
    firstName: '',
    secondName: '',
    phone: '',
    birthday: '',
    website: '',
    email: '',
    company: ''
};

  constructor(
    private route: ActivatedRoute,
    private http: ContactHttpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      // this.getContact(this.id);
    });
  }

  add(): void {
    if (!this.contact) { return; }
    this.http.createContact(this.contact)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
