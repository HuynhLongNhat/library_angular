import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { BookService } from 'projects/admin/src/service/Book.service';
import { ProductBook } from 'projects/admin/src/models/model';
@Component({
  selector: 'app-page-add-new-book',
  templateUrl: "./page-edit-book.component.html",
  styleUrls: ['./page-edit-book.component.scss']
})
export class PageEditBookComponent implements OnInit {
  public imageSrc: string | ArrayBuffer | null | undefined;
  public editBookForm!: FormGroup;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder, private bookService: BookService) { }


  ngOnInit() {
    this.bookService.currentBook.subscribe(book => {
      if (book) {
        this.editBookForm = this.formBuilder.group({
          id: [book.id, [Validators.required]],
          name: [book.name, [Validators.required]],
          author: [book.author, [Validators.required]],
          genre: [book.genre, [Validators.required]],
          publicYear: [book.publicYear, [Validators.required]],
          quantity: [book.quantity, [Validators.required]],
          image: [book.image, [Validators.required]],

        })
      };
    });
  }
  convertImageBas64(event: any): void {
    let file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.editBookForm.patchValue({ image: e.target.result });
      };
    }
  }


  handleEditBook() {

    this.dataService.updateBook({
      id: this.editBookForm.value.id,
      author: this.editBookForm.value.author,
      genre: this.editBookForm.value.genre,
      name: this.editBookForm.value.name,
      publicYear: this.editBookForm.value.publicYear,
      quantity: this.editBookForm.value.quantity,
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

