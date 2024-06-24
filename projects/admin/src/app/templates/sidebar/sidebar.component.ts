import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  navigateBookManage() {
    this.router.navigate(['page-list-book'])

  }
  navigateReaderManage() {
    this.router.navigate(['manage-reader'])

  }
  navigateStaffManage() {
    this.router.navigate(['manage-staff'])

  }

  navigateRequestManage() {
    this.router.navigate(['manage-request'])

  }
}
