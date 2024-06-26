import { Padding } from './../../../../assets/vendor/chart.js/types/geometric.d';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { Staff } from 'projects/admin/src/models/model';
import { StaffService } from 'projects/admin/src/service/Staff.service';
@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss'],
})
export class PageListAccAdminComponent implements OnInit {
  searchText: any;
  p: number = 1;
  itemsPerPage: number = 8;
  Staff$!: Staff[];

  constructor(
    private dataService: DataService,
    private router: Router,
    private staffService: StaffService
  ) {}
  ngOnInit(): void {
    this.dataService.getAllStaff().subscribe(
      (data: any) => {
        console.log(data.DT);
        this.Staff$ = data.DT;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }
  deleteStaff(staff: any) {
    if (confirm(`Bạn có chắc chắn muốn nhân viên : ${staff.name} không ?`)) {
      this.dataService.deleteStaff(staff.id).subscribe(
        (response: any) => {
          if (response.EC === 0) {
            alert(response.EM);
            this.dataService.getAllStaff().subscribe(
              (data: any) => {
                this.Staff$ = data.DT;
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

  navigationEditStaff(staff: any) {
    this.staffService.changeStaff(staff);
    this.router.navigate(['/edit-staff']);
  }

  navigationAddNewStaff() {
    this.router.navigate(['create-new-staff']);
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number((event.target as HTMLSelectElement)?.value);
  }
}
