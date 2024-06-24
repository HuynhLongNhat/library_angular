import { PageCreateNewRequest } from './components/pages/manage-request/create-new-request/create-new-request.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { PageRegisterComponent } from './components/pages/page-register/page-register.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';

import { FormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalReturnTheBookComponent } from './mods/modal-return-the-book/modal-return-the-book.component'
import { ManageReaderComponent } from './components/pages/manage-reader/manage-reader.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PageListAccAdminComponent } from './components/pages/manage-staff/manage-staff.component';

import { PageAddNewBookComponent } from './components/pages/manage-book/page-add-new-book/page-add-new-book.component';
import { PageErrorComponent } from './components/pages/page-error/page-error.component';
import { ModalReturnTrueComponent } from './mods/modal-return-true/modal-return-true.component';
import { ModalReturnFalseComponent } from './mods/modal-return-false/modal-return-false.component';
import { ModalReturnRmComponent } from './mods/modal-return-rm/modal-return-rm.component';
import { HeaderComponent } from './templates/header/header.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ManageBookComponent } from './components/pages/manage-book/manage-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditBookComponent } from './components/pages/manage-book/page-edit-book/page-edit-book.component';
import { PageCreateNewStaff } from './components/pages/manage-staff/create-new-staff/create-new-staff.component';
import { PageEditStaffComponent } from './components/pages/manage-staff/edit-staff/edit-staff.component';
import { PageCreateNewReader } from './components/pages/manage-reader/create-new-reader/create-new-reader.component';
import { PageEditReaderComponent } from './components/pages/manage-reader/edit-reader/edit-reader.component';
import { ManageRequestComponent } from './components/pages/manage-request/manage-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PageEditRequestComponent } from './components/pages/manage-request/edit-request/edit-request.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageHomeComponent,


    ModalReturnTheBookComponent,

    ManageReaderComponent,
    PageListAccAdminComponent,

    ManageBookComponent,
    PageAddNewBookComponent,
    PageErrorComponent,
    ModalReturnTrueComponent,
    ModalReturnFalseComponent,
    ModalReturnRmComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageRegisterComponent,
    PageEditBookComponent,
    PageCreateNewStaff,
    PageEditStaffComponent,
    PageCreateNewReader,
    PageEditReaderComponent,
    ManageRequestComponent,
    PageCreateNewRequest,
    PageEditRequestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgbModalModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
