import { ReaderService } from './../../../../service/Reader.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { Reader } from 'projects/admin/src/models/model';
@Component({
  selector: 'app-page-list-acc-user',
  templateUrl: './manage-reader.component.html',
  styleUrls: ['./manage-reader.component.html'],
})
export class ManageReaderComponent implements OnInit {
  searchText: any;
  p: number = 1;
  itemsPerPage: number = 8;
  readers$!: Reader[];

  constructor(
    private dataService: DataService,
    private router: Router,
    private readerService: ReaderService
  ) {}
  ngOnInit(): void {
    this.dataService.getAllReader().subscribe(
      (data: any) => {
        this.readers$ = data.DT;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  navigationAddNewReader() {
    this.router.navigate(['create-new-reader']);
  }

  deleteReader(reader: any) {
    if (confirm(`Bạn có chắc chắn muốn độc giả : ${reader.name} không ?`)) {
      this.dataService.deleteReader(reader.id).subscribe(
        (response: any) => {
          if (response.EC === 0) {
            alert(response.EM);
            this.dataService.getAllReader().subscribe(
              (data: any) => {
                this.readers$ = data.DT;
              },
              (error) => {
                console.error('Error fetching data: ', error);
              }
            );
          }
        },
        (error) => {
          alert('Đã xảy ra lỗi');
        }
      );
    }
  }
  navigationEditReader(reader: any) {
    this.readerService.changeReader(reader);
    this.router.navigate(['/edit-reader']);
  }
  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number((event.target as HTMLSelectElement)?.value);
  }
}
