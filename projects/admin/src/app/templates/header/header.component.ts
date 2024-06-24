import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  email: string | null = null;
  name: string | null = null;
  role: string | null = null;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    const isAdminString = localStorage.getItem('isAdmin'); // Store as string

    if (isAdminString === '0') {
      this.role = 'Quản trị viên';
    } else if (isAdminString === '1') {
      this.role = 'Nhân viên';
    } else {
      this.role = 'Không xác định'; // Default fallback
    }
  }
  handleLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('isAdmin')
    this.router.navigate(["/page-login"])

  }
}
