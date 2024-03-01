import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ProfileComponent } from './profile/profile.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: 'form', component: ClientFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
