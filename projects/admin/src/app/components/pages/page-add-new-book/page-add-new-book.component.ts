import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-add-new-book',
  template: ` <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Thêm mới sách</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý sách</a>
            <li class="breadcrumb-item active">Thêm mới sách</li>
          </ol>
        </nav>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Thêm mới sách</h5>

            <!-- General Form Elements -->
            <form>
              <div class="row mb-3">
                <div class="col">
                  <label for="inputText1" class="col-form-label"
                    ><span style="color: red;">* </span>Tên sách</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputText1"
                    name="inputText1"
                    placeholder="Mã sách"
                  />
                </div>
                <div class="col">
                  <label for="inputText2" class="col-form-label"
                    ><span style="color: red;">* </span>Tác giả</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputText2"
                    name="inputText2"
                    placeholder="Mã sinh viên"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="inputText3" class="col-form-label"
                    ><span style="color: red;">* </span>Danh mục</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputText3"
                    name="inputText3"
                    placeholder="Tên sách"
                  />
                </div>
                <div class="col">
                  <label for="inputText4" class="col-form-label"
                    ><span style="color: red;">* </span>Mã sách</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputText4"
                    name="inputText4"
                    placeholder="Tên sinh viên"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="inputText5" class="col-form-label"
                    ><span style="color: red;">* </span>Số lượng</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputText5"
                    name="inputText5"
                    placeholder="Số lượng"
                  />
                </div>
                <div class="col">
                  <label for="inputText6" class="col-form-label"
                    ><span style="color: red;">* </span>Mô tả</label
                  >
                  <textarea class="form-control"></textarea>
                </div>

                <div class="row">
                  <label for="inputText7" class="col-form-label"
                    ><span style="color: red;">* </span>Hình ảnh</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    id="inputText5"
                    name="inputText5"
                    placeholder="Số lượng"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-outline-primary">
                    Thêm mới
                  </button>
                </div>
              </div>
            </form>
            <!-- End General Form Elements -->
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>`,
})
export class PageAddNewBookComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}