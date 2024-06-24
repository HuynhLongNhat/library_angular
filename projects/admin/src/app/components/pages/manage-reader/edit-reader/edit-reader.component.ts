import { ReaderService } from './../../../../../service/Reader.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-reader',
  templateUrl: "./edit-reader.component.html",
  styleUrls: ['./edit-reader.component.scss']
})
export class PageEditReaderComponent implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public editReaderForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder, private readerService: ReaderService) { }
  ngOnInit(): void {

    this.readerService.currentStaff.subscribe(reader => {
      console.log(reader)
      if (reader) {
        this.editReaderForm = this.formBuilder.group({
          id: [reader.id, [Validators.required]],
          name: [reader.name, [Validators.required]],
          address: [reader.address, [Validators.required]],
          gender: [reader.gender, [Validators.required]],

        });
      }
    }
    )
  }


  handleEditReader() {
    console.log(this.editReaderForm.value)
    this.dataService.updateReader(this.editReaderForm.value)
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

