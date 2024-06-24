import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-add-new-book',
  templateUrl: "./page-add-new-book.component.html",
  styleUrls: ['./page-add-new-book.component.scss']
})
export class PageAddNewBookComponent implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public addNewBookForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.addNewBookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      publicYear: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });

  }
  convertImageBas64(event: any): void {
    let file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.addNewBookForm.patchValue({ image: e.target.result }); // Cập nhật giá trị của trường image trong form
      };
    }
  }


  handleAddNewBook() {

    this.dataService.createNewBook({
      author: this.addNewBookForm.value.author,
      genre: this.addNewBookForm.value.genre,
      name: this.addNewBookForm.value.name,
      publicYear: this.addNewBookForm.value.publicYear,
      quantity: this.addNewBookForm.value.quantity,
      image: this.imageSrc,

    })
      .subscribe((response: any) => {
        console.log('res', response.EC);
        if (response.EC === 0) {
          alert(response.EM);
          this.router.navigate(['/page-list-book']);
        } else {
          alert(response.EM);

        }
      }, error => {
        alert('Đã xảy ra lỗi');

      });
  }
}

