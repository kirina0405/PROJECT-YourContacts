import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
