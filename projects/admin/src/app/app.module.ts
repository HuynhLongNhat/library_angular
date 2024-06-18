import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageAddNewComponent } from './components/pages/page-add-new/page-add-new.component';
import { FormsModule } from '@angular/forms';
import { PageBorrowComponent } from './components/pages/page-borrow/page-borrow.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalReturnTheBookComponent } from './mods/modal-return-the-book/modal-return-the-book.component';
import { PageReturnComponent } from './components/pages/page-return/page-return.component';
import { PageCharMaxComponent } from './components/pages/page-char-max/page-char-max.component';
import { PageCharSMaxComponent } from './components/pages/page-char-s-max/page-char-s-max.component';
import { PageListAccUserComponent } from './components/pages/page-list-acc-user/page-list-acc-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PageListAccAdminComponent } from './components/pages/page-list-acc-admin/page-list-acc-admin.component';
import { PageListCategoryComponent } from './components/pages/page-list-category/page-list-category.component';
import { PageListBookComponent } from './components/pages/page-list-book/page-list-book.component';
import { PageAddNewBookComponent } from './components/pages/page-add-new-book/page-add-new-book.component';
import { PageErrorComponent } from './components/pages/page-error/page-error.component';
import { ModalReturnTrueComponent } from './mods/modal-return-true/modal-return-true.component';
import { ModalReturnFalseComponent } from './mods/modal-return-false/modal-return-false.component';
import { ModalReturnRmComponent } from './mods/modal-return-rm/modal-return-rm.component';
import { HeaderComponent } from './templates/header/header.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageHomeComponent,
    PageAddNewComponent,
    PageBorrowComponent,
    ModalReturnTheBookComponent,
    PageReturnComponent,
    PageCharMaxComponent,
    PageCharSMaxComponent,
    PageListAccUserComponent,
    PageListAccAdminComponent,
    PageListCategoryComponent,
    PageListBookComponent,
    PageAddNewBookComponent,
    PageErrorComponent,
    ModalReturnTrueComponent,
    ModalReturnFalseComponent,
    ModalReturnRmComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgbModalModule,
    MatDialogModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
