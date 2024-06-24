import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-new-staff',
  templateUrl: "./create-new-reader.component.html",
  styleUrls: ['./create-new-reader.component.scss']
})
export class PageCreateNewReader implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public addNewReaderForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.addNewReaderForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],

    });

  }


  handleAddNewReader() {
    console.log('data :', this.addNewReaderForm.value)

    this.dataService.createNewReader(this.addNewReaderForm.value)
      .subscribe((response: any) => {
        console.log('res', response.EC);
        if (response.EC === 0) {
          alert(response.EM);
          this.router.navigate(['/manage-reader']);
        } else {
          alert(response.EM);

        }
      }, error => {
        alert('Đã xảy ra lỗi');

      });
  }
}

