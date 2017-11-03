import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../interfaces/contact';
import { ContactHttpService } from '../services/contact-http.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  public id;
  public contact = {};

  constructor(
    private route: ActivatedRoute,
    private http: ContactHttpService,
  ) {
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
  ngOnInit() {
  }

}
