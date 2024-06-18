import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageAddNewComponent } from './components/pages/page-add-new/page-add-new.component';
import { PageBorrowComponent } from './components/pages/page-borrow/page-borrow.component';
import { PageReturnComponent } from './components/pages/page-return/page-return.component';
import { PageCharMaxComponent } from './components/pages/page-char-max/page-char-max.component';
import { PageCharSMaxComponent } from './components/pages/page-char-s-max/page-char-s-max.component';
import { PageListAccUserComponent } from './components/pages/page-list-acc-user/page-list-acc-user.component';
import { PageListAccAdminComponent } from './components/pages/page-list-acc-admin/page-list-acc-admin.component';
import { PageListCategoryComponent } from './components/pages/page-list-category/page-list-category.component';
import { PageListBookComponent } from './components/pages/page-list-book/page-list-book.component';
import { PageAddNewBookComponent } from './components/pages/page-add-new-book/page-add-new-book.component';
import { PageErrorComponent } from './components/pages/page-error/page-error.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'page-login', component: PageLoginComponent },
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-add-new', component: PageAddNewComponent },
  { path: 'page-borrow', component: PageBorrowComponent },
  { path: 'page-return', component: PageReturnComponent },
  { path: 'page-char-max', component: PageCharMaxComponent },
  { path: 'page-char-s-max', component: PageCharSMaxComponent },
  { path: 'page-list-acc-user', component: PageListAccUserComponent },
  { path: 'page-list-acc-admin', component: PageListAccAdminComponent },
  { path: 'page-list-category', component: PageListCategoryComponent },
  { path: 'page-list-book', component: PageListBookComponent },
  { path: 'page-add-new-book', component: PageAddNewBookComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
