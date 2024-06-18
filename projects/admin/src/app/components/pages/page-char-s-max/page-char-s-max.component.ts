import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-char-s-max',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Sinh viên mượn nhiều</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Thống kê</a>
            <li class="breadcrumb-item active">Sinh viên mượn nhiều</li>
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Sinh viên mượn nhiều</h5>

                  <!-- Table with stripped rows -->
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Lớp học</th>
                        <th>Số sách mượn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3</td>
                        <td>MS003</td>
                        <td>To Kill a Mockingbird</td>
                        <td>2</td>
                        <td>2024/05/05</td>
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
export class PageCharSMaxComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
