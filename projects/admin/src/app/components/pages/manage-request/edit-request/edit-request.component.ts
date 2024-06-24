import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { StaffService } from 'projects/admin/src/service/Staff.service';
import { Reader, ProductBook } from 'projects/admin/src/models/model';
import { RequestService } from 'projects/admin/src/service/Request.service';
@Component({
  selector: 'app-edit-staff',
  templateUrl: "./edit-request.component.html",
  styleUrls: ['./edit-request.component.scss']
})
export class PageEditRequestComponent implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public editRequestForm!: FormGroup;

  readers$!: Reader[];
  productBook$!: ProductBook[]
  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder, private requestService: RequestService) { }
  ngOnInit(): void {

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


    this.requestService.currentStaff.subscribe(request => {
      console.log(request)
      if (request) {
        this.editRequestForm = this.formBuilder.group({
          id: [request.id, [Validators.required]],
          readerId: [request.readerId, [Validators.required]],
          bookId: [request.bookId, [Validators.required]],
          quantity: [request.quantity, [Validators.required]],
          borrowDate: new FormControl(request.borrowDate, [Validators.required]),
          returnDate: new FormControl(request.returnDate, [Validators.required]),

        });
      }
    }
    )
  }


  handleEditRequest() {

    this.dataService.updateRequest({
      id: this.editRequestForm.value.id,
      readerId: this.editRequestForm.value.readerId,
      bookId: this.editRequestForm.value.bookId,
      quantity: this.editRequestForm.value.quantity,
      borrowDate: this.editRequestForm.value.borrowDate,
      returnDate: this.editRequestForm.value.returnDate,
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

