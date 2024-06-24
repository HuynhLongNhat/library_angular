import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { Reader } from 'projects/admin/src/models/model';
import { ProductBook } from 'projects/admin/src/models/model';

@Component({
  selector: 'app-create-new-staff',
  templateUrl: "./create-new-request.component.html",
  styleUrls: ['./create-new-request.component.scss'],

})
export class PageCreateNewRequest implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public addNewRequestForm!: FormGroup;
  readers$!: Reader[];
  productBook$!: ProductBook[]



  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.addNewRequestForm = this.formBuilder.group({
      readerId: ['', [Validators.required]],
      bookId: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      borrowDate: new FormControl('', [Validators.required]),
      returnDate: new FormControl('', [Validators.required]),

    });

    this.dataService.getAllReader().subscribe(
      (data: any) => {
        this.readers$ = data.DT;

      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );

    this.dataService.getAllBook().subscribe(
      (data: any) => {
        this.productBook$ = data.DT;

      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );

  }


  handleAddNewRequest() {


    this.dataService.createNewRequest({
      readerId: this.addNewRequestForm.value.readerId,
      bookId: this.addNewRequestForm.value.bookId,
      quantity: this.addNewRequestForm.value.quantity,
      borrowDate: this.addNewRequestForm.value.borrowDate,
      returnDate: this.addNewRequestForm.value.returnDate,
      staffId: localStorage.getItem('id')

    })
      .subscribe((response: any) => {
        console.log('res', response.EC);
        if (response.EC === 0) {
          alert(response.EM);
          this.router.navigate(['/manage-request']);
        } else {
          alert(response.EM);

        }
      }, error => {
        alert('Đã xảy ra lỗi');

      });
  }
}

