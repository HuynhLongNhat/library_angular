import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-book',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Danh sách sách</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý sách</a>
            <li class="breadcrumb-item active">Danh sách sách</li>
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card modal-return-the-book">
                <div class="card-body">
                  <h5 class="card-title">Danh sách sách</h5>
                  <a
                    class="btn btn-primary btn-icon-split btn-sm"
                    href="page-add-new-book"
                  >
                    <span class="icon text-white-50">
                      <i class="bi bi-plus"></i>
                    </span>
                    <span>Thêm mới</span>
                  </a>
                  <!-- Table with stripped rows -->
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã sách</th>
                        <th>Hình ảnh</th>
                        <th>Tên sách</th>
                        <th>Tác giả</th>
                        <th>Mô tả</th>
                        <th>Thể loại</th>
                        <th>Số lượng</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MS001</td>
                        <td>
                          <img
                            src="https://unsplash.it/400/300"
                            width="100"
                            height="100"
                            style="border-radius: 5px;"
                          />
                        </td>
                        <td>Sách A</td>
                        <td>Tác giả A</td>
                        <td>
                          Mô tả sách A Mô tả sách A Mô tả sách A Mô tả sách A Mô
                          tả sách A Mô tả sách A Mô tả sách A Mô tả sách A
                        </td>
                        <td>Thể loại A</td>
                        <td>10</td>
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
export class PageListBookComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
