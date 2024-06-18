import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-return',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Danh sách yêu cầu trả</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý yêu cầu</a>
            <li class="breadcrumb-item active">Danh sách yêu cầu trả</li>
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Danh sách yêu cầu trả</h5>

                  <!-- Table with stripped rows -->
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã sách</th>
                        <th>Tên sách</th>
                        <th>Số lượng</th>
                        <th data-type="date" data-format="YYYY/DD/MM">
                          Ngày trả
                        </th>
                        <th>Người trả</th>
                        <th>Duyệt bởi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MS003</td>
                        <td>To Kill a Mockingbird</td>
                        <td>2</td>
                        <td>2024/05/05</td>
                        <td>John Doe</td>
                        <td>John Doe</td>
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
export class PageReturnComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
