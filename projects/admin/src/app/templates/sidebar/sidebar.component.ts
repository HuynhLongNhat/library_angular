import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: ` <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link " href="page-home">
            <i class="bi bi-house-door-fill"></i>
            <span>Trang chủ</span>
          </a>
        </li>
        <!-- End Dashboard Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-bar-chart"></i>
            <span>Thống kê</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            class="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="page-char-max">
                <i class="bi bi-circle"></i><span>Mượn nhiều nhất</span>
              </a>
            </li>
            <li>
              <a href="page-char-s-max">
                <i class="bi bi-circle"></i><span>Sinh viên mượn nhiều</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Components Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-clipboard-check"></i>
            <span>Quản lý yêu cầu</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            class="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="page-add-new">
                <i class="bi bi-circle"></i><span>Tạo yêu cầu</span>
              </a>
            </li>
            <li>
              <a href="page-borrow">
                <i class="bi bi-circle"></i><span>Yêu cầu mượn</span>
              </a>
            </li>
            <li>
              <a href="page-return">
                <i class="bi bi-circle"></i><span>Yêu cầu trả</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Forms Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-people"></i>
            <span>Quản lý người dùng</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            class="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="page-list-acc-user">
                <i class="bi bi-circle"></i><span>Danh sách bạn đọc</span>
              </a>
            </li>
            <li>
              <a href="page-list-acc-admin">
                <i class="bi bi-circle"></i><span>Danh sách nhân viên</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Tables Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-tags"></i>
            <span>Quản lý danh mục</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            class="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="page-list-category">
                <i class="bi bi-circle"></i><span>Danh sách danh mục</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Charts Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-book"></i>
            <span>Quản lý sách</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="icons-nav"
            class="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="page-list-book">
                <i class="bi bi-circle"></i><span>Danh sách sách</span>
              </a>
            </li>
            <li>
              <a href="page-add-new-book">
                <i class="bi bi-circle"></i><span>Thêm sách</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Icons Nav -->
      </ul>
    </aside>
    <!-- End Sidebar-->`,
})
export class SidebarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
