import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { StaffService } from 'projects/admin/src/service/Staff.service';
@Component({
  selector: 'app-edit-staff',
  templateUrl: "./edit-staff.component.html",
  styleUrls: ['./edit-staff.component.scss']
})
export class PageEditStaffComponent implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public editStaffForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder, private staffService: StaffService) { }
  ngOnInit(): void {

    this.staffService.currentStaff.subscribe(staff => {
      console.log(staff)
      if (staff) {
        this.editStaffForm = this.formBuilder.group({
          id: [staff.id, [Validators.required]],
          name: [staff.name, [Validators.required]],
          address: [staff.address, [Validators.required]],
          gender: [staff.gender, [Validators.required]],

        });
      }
    }
    )
  }


  handleEditStaff() {
    console.log(this.editStaffForm.value)
    this.dataService.updateStaff(this.editStaffForm.value)
      .subscribe((response: any) => {
        console.log('res', response.EC);
        if (response.EC === 0) {
          alert(response.EM);
          this.router.navigate(['/manage-staff']);
        } else {
          alert(response.EM);

        }
      }, error => {
        alert('Đã xảy ra lỗi');

      });
  }
}

