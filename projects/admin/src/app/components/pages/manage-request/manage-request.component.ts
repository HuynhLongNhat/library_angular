import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Request } from 'projects/admin/src/models/model';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { RequestService } from 'projects/admin/src/service/Request.service';
@Component({
  selector: 'app-page-borrow',
  templateUrl: './manage-request.component.html',
  styleUrls: ["./manage-request.component.scss"]
})
export class ManageRequestComponent implements OnInit {

  p: number = 1;
  itemsPerPage: number = 8;
  requests$!: Request[];
  constructor(private dataService: DataService, private router: Router, private requestService: RequestService) { }
  ngOnInit(): void {
    this.dataService.getAllRequest().subscribe(
      (data: any) => {

        this.requests$ = data.DT;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );

  }


  navigationAddNewRequest() {
    this.router.navigate(['create-new-request'])
  }

  navigationEditRequest(request: any) {
    this.requestService.changeRequest(request);
    this.router.navigate(['/edit-request']);
  }


  returnBook(request: any) {
    if (confirm(`Bạn có chắc chắn muốn trả sách  không ?`)) {
      this.dataService.returnBook(request.id)
        .subscribe((response: any) => {
          if (response.EC === 0) {
            alert(response.EM);
            this.dataService.getAllRequest().subscribe(
              (data: any) => {
                this.requests$ = data.DT;

              },
              (error) => {
                console.error('Error fetching data: ', error);
              }
            );
          }

        }, error => {
          alert('Đã xảy ra lỗi');

        });
    }

  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number((event.target as HTMLSelectElement)?.value);
  }


}
