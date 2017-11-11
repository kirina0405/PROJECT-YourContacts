import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditCreateComponent } from './contact-edit-create/contact-edit-create.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'contact', component: AllContactsComponent},
  {path: 'contact/new', component: ContactEditCreateComponent},
  {path: 'contact/:id', component: ContactDetailComponent},
  {path: 'app', component: AppComponent},
  {path: '', redirectTo: '/contact', pathMatch: 'full'},
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
