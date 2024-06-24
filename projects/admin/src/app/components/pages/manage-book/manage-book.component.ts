import { BookService } from '../../../../service/Book.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/admin/src/service/Data.service';
import { ProductBook } from 'projects/admin/src/models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-book',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Quản lí sách</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-home">Trang chủ</a>
            </li>
            <a class="breadcrumb-item">Quản lý sách</a>
          
          </ol>
        </nav>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card modal-return-the-book">
                <div class="card-body">
                  <h5 class="card-title">Danh sách sách</h5>
                <button class="btn btn-primary mb-3" (click)="navigationPageAddNewBook()">
                  Thêm sách mới
                </button>
                  <!-- Table with stripped rows -->
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>STT</th>
                      
                        <th>Hình ảnh</th>
                        <th>Tên sách</th>
                        <th>Tác giả</th>
                       
                        <th>Thể loại</th>
                        <th>Năm xuất bản</th>
                        <th>Số lượng</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                     
                    <tr *ngFor="let p of products$ | paginate: { itemsPerPage: itemsPerPage, currentPage: p }; let i = index">
                    <td>{{i + 1}}</td>
                        <td>
                        <img src="{{p.image}}" width="100" height="100" style="border-radius: 5px;" />
                        </td>
                              <td>{{p.name}}</td>
                              <td>{{p.author}}</td>
                              <td>{{p.genre}}</td>
                              <td>{{p.publicYear}}</td>
                              <td>{{p.quantity}}</td>
                        <td
                          class="mt-3"
                        >
                          
                          <button class="btn btn-danger mx-2">  <i class="bi bi-prescription mx-2"></i>
                          <span  (click)="deleteABook(p)">Xóa</span></button>
                       
                           <button class="btn btn-warning " (click)="navigationPageEditBook(p)">  <i class="bi bi-pencil mx-2"></i>
                           <span >Cập nhật</span></button>
                          
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
        <pagination-controls
            class="pagination-controls d-flex justify-content-center"
            (pageChange)="p = $event"></pagination-controls>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ["./manage-book.component.scss"]
})
export class ManageBookComponent implements OnInit {
  p: number = 1;
  itemsPerPage: number = 8;
  products$!: ProductBook[];
  constructor(private dataService: DataService, private router: Router, private bookService: BookService) { }
  ngOnInit(): void {
    this.dataService.getAllBook().subscribe(
      (data: any) => {
        this.products$ = data.DT;

      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number((event.target as HTMLSelectElement)?.value);
  }

  navigationPageAddNewBook() {

    this.router.navigate(['/page-add-new-book']);
  }

  navigationPageEditBook(book: any) {
    this.bookService.changeBook(book);
    this.router.navigate(['/page-edit-book']);
  }

  // Hàm để xóa sách
  deleteABook(book: any) {

    if (confirm(`Bạn có chắc chắn muốn xóa sách : ${book.name} không ?`)) {
      this.dataService.destroyBook(book.id)
        .subscribe((response: any) => {
          if (response.EC === 0) {
            alert(response.EM);
            this.dataService.getAllBook().subscribe(
              (data: any) => {
                this.products$ = data.DT;

              },
              (error) => {
                console.error('Error fetching data: ', error);
              }
            );
          }
          // Xử lý phản hồi thành công (ví dụ: điều hướng đến danh sách sách)
        }, error => {
          alert('Đã xảy ra lỗi');
          // Xử lý lỗi xóa (ví dụ: hiển thị thông báo lỗi)
        });
    }
  }


}

