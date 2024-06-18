import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-acc-user',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Danh sách bạn đọc</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý người dùng</a>
            <li class="breadcrumb-item active">Danh sách bạn đọc</li>
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Danh sách bạn đọc</h5>
                  <!-- Table with stripped rows -->
                  <!-- Nút Thêm Mới -->
                  <a
                    class="btn btn-primary btn-icon-split btn-sm"
                    data-bs-target="#formCollapse"
                    data-bs-toggle="collapse"
                    (click)="changeText()"
                  >
                    <span class="icon text-white-50">
                      <i class="bi bi-plus"></i>
                    </span>
                    <span
                      class="text"
                      *ngIf="textRender ? 'Đóng' : 'Thêm mới' as text"
                      >{{ text }}</span
                    >
                  </a>

                  <!-- Form Thêm Mới -->
                  <div class="collapse mt-4" id="formCollapse">
                    <h5 class="card-title">Thêm mới bạn đọc</h5>
                    <form id="newForm">
                      <div class="mb-3">
                        <label for="name" class="form-label"
                          ><span style="color: red;">* </span>Mã bạn đọc</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label"
                          ><span style="color: red;">* </span>Họ tên bạn
                          đọc</label
                        >
                        <input type="text" class="form-control" required />
                      </div>
                      <div class="mb-3">
                        <label class="form-label"
                          ><span style="color: red;">* </span>Lớp</label
                        >
                        <input type="text" class="form-control" required />
                      </div>
                      <div class="mb-3">
                        <label class="form-label"
                          ><span style="color: red;">* </span>Email</label
                        >
                        <input type="email" class="form-control" required />
                      </div>
                      <div class="mb-3">
                        <label class="form-label"
                          ><span style="color: red;">* </span>Mật khẩu</label
                        >
                        <input type="password" class="form-control" required />
                      </div>
                      <button type="submit" class="btn btn-outline-primary">
                        Cập nhật
                      </button>
                    </form>
                  </div>
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Lớp học</th>
                        <th>Email</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MS003</td>
                        <td>To Kill a Mockingbird</td>
                        <td>2</td>
                        <td>2024/05/05</td>
                        <td
                          class="text-center d-flex justify-content-center align-middle"
                        >
                          <a
                            class="btn btn-primary btn-circle btn-sm mr-2"
                            style="margin-right: 5px;"
                            mat-raised-button
                          >
                            <i class="bi bi-prescription"></i>
                            <span class="btn-text">Xóa</span>
                          </a>
                          <a
                            class="btn btn-primary btn-circle btn-sm mr-2"
                            mat-raised-button
                          >
                            <i class="bi bi-pencil"></i>
                            <span class="btn-text">Cập nhật</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- End Table with stripped rows -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <app-footer></app-footer>
  `,
})
export class PageListAccUserComponent implements OnInit {
  textRender: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  changeText() {
    if (this.textRender != null) {
      this.textRender = !this.textRender;
    }
  }
}
