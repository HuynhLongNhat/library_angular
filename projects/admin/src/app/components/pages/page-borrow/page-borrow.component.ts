import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-page-borrow',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Danh sách yêu cầu mượn</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý yêu cầu</a>
            <li class="breadcrumb-item active">Danh sách yêu cầu mượn</li>
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card modal-return-the-book">
                <div class="card-body">
                  <h5 class="card-title">Danh sách yêu cầu mượn</h5>

                  <!-- Table with stripped rows -->
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã sách</th>
                        <th>Tên sách</th>
                        <th>Số lượng</th>
                        <th data-type="date" data-format="YYYY/DD/MM">
                          Ngày mượn
                        </th>
                        <th data-type="date" data-format="YYYY/DD/MM">
                          Hạn trả
                        </th>
                        <th>Người mượn</th>
                        <th>Duyệt bởi</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3</td>
                        <td>MS003</td>
                        <td>To Kill a Mockingbird</td>
                        <td>2</td>
                        <td>2024/05/05</td>
                        <td>2024/05/20</td>
                        <td>Jane Doe</td>
                        <td>John Doe</td>
                        <td
                          class="text-center d-flex justify-content-center align-middle"
                        >
                          <a
                            class="btn btn-primary btn-circle btn-sm mr-2"
                            mat-raised-button
                            (click)="openModalFalse()"
                          >
                            <i class="bi bi-book"></i>
                            <span class="btn-text">Trả sách</span>
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
        <app-modal-return-the-book></app-modal-return-the-book>
        <app-modal-return-rm></app-modal-return-rm>
        <app-modal-return-true></app-modal-return-true>
        <app-modal-return-false></app-modal-return-false>
      </div>
    </main>
    <app-footer></app-footer>
  `,
})
export class PageBorrowComponent implements OnInit {
  constructor(
    // private modal: ModalService,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }
  ngOnInit(): void { }

  // openModalReturnTheBook() {
  //   this.modal.openModal(this.renderer, this.elRef, '#modalReturnTheBook');
  // }

  // openModalReturnRm() {
  //   this.modal.openModal(this.renderer, this.elRef, '#modalReturnRm');
  // }

  // openModalTrue() {
  //   this.modal.openModal(this.renderer, this.elRef, '#modalReturnTrue');
  //   setTimeout(() => {
  //     this.modal.closeModal(this.renderer, this.elRef, '#modalReturnTrue');
  //   }, 500);
  // }

  openModalFalse() {
    // this.modal.openModal(this.renderer, this.elRef, '#modalReturnFalse');
    // setTimeout(() => {
    //   this.modal.closeModal(this.renderer, this.elRef, '#modalReturnFalse');
    // }, 500);
  }
}
