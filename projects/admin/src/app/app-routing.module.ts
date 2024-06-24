import { PageCreateNewRequest } from './components/pages/manage-request/create-new-request/create-new-request.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { ManageReaderComponent } from './components/pages/manage-reader/manage-reader.component';
import { PageListAccAdminComponent } from './components/pages/manage-staff/manage-staff.component';

import { ManageBookComponent } from './components/pages/manage-book/manage-book.component';
import { PageAddNewBookComponent } from './components/pages/manage-book/page-add-new-book/page-add-new-book.component';
import { PageErrorComponent } from './components/pages/page-error/page-error.component';
import { PageRegisterComponent } from './components/pages/page-register/page-register.component';
import { PageEditBookComponent } from './components/pages/manage-book/page-edit-book/page-edit-book.component';
import { PageCreateNewStaff } from './components/pages/manage-staff/create-new-staff/create-new-staff.component';
import { PageEditStaffComponent } from './components/pages/manage-staff/edit-staff/edit-staff.component';
import { PageCreateNewReader } from './components/pages/manage-reader/create-new-reader/create-new-reader.component';
import { PageEditReaderComponent } from './components/pages/manage-reader/edit-reader/edit-reader.component';
import { ManageRequestComponent } from './components/pages/manage-request/manage-request.component';
import { PageEditRequestComponent } from './components/pages/manage-request/edit-request/edit-request.component';
const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'page-login', component: PageLoginComponent },
  { path: 'page-register', component: PageRegisterComponent },
  { path: 'page-home', component: PageHomeComponent },

  { path: 'manage-request', component: ManageRequestComponent },

  { path: 'manage-reader', component: ManageReaderComponent },
  { path: 'manage-staff', component: PageListAccAdminComponent },

  { path: 'page-list-book', component: ManageBookComponent },
  { path: 'page-add-new-book', component: PageAddNewBookComponent },
  { path: 'page-edit-book', component: PageEditBookComponent },
  { path: 'create-new-staff', component: PageCreateNewStaff },
  { path: 'edit-staff', component: PageEditStaffComponent },

  //reader 
  { path: 'create-new-reader', component: PageCreateNewReader },
  { path: 'edit-reader', component: PageEditReaderComponent },

  //request 
  { path: 'create-new-request', component: PageCreateNewRequest },
  { path: 'edit-request', component: PageEditRequestComponent },

  { path: '**', component: PageErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
