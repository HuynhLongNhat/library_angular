import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-new-staff',
  templateUrl: "./create-new-staff.component.html",
  styleUrls: ['./create-new-staff.component.scss']
})
export class PageCreateNewStaff implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public addNewStaffForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.addNewStaffForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],

    });

  }


  handleAddNewStaff() {

    this.dataService.createNewStaff(this.addNewStaffForm.value)
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

