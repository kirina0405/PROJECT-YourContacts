import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const appRoutes: Routes = [
  {path: 'contact', component: AllContactsComponent},
  {path: 'contact/:id', component: ContactDetailComponent},
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
