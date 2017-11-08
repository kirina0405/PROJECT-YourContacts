import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactHttpService } from './services/contact-http.service';
import { AppRoutingModule } from './app-routing.module';
import { ContactSearchComponent } from './contact-search/contact-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsComponent,
    ContactDetailComponent,
    ContactSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
