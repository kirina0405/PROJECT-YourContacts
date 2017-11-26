import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditCreateComponent } from './contact-edit-create/contact-edit-create.component';
import { ContactHttpService } from './services/contact-http.service';
import { AppRoutingModule } from './app-routing.module';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactSearchService } from './services/contact-search.service';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsComponent,
    ContactDetailComponent,
    ContactEditCreateComponent,
    ContactSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactHttpService, ContactSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
