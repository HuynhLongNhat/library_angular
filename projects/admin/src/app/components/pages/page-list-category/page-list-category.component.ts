import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-category',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Danh sách danh mục</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý danh mục</a>
            <li class="breadcrumb-item active">Danh sách danh mục</li>
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card modal-return-the-book">
                <div class="card-body">
                  <h5 class="card-title">Danh sách danh mục</h5>

                  <!-- Table with stripped rows -->
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên danh mục</th>
                        <th>Tổng số lượng sách</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MS003</td>
                        <td>2</td>
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
export class PageListCategoryComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
