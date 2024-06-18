import { DataService } from './../../../../service/Data.service';
import { Component, OnInit } from '@angular/core';
import { ProductBook } from 'projects/admin/src/models/model';

@Component({
  selector: 'app-page-home',
  templateUrl: "./page-home.component.html",
  // styleUrl: "./page-home.component.scss"

})
export class PageHomeComponent implements OnInit {
  p: number = 1;
  itemsPerPage: number = 8;
  products$!: ProductBook[];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getAllBook().subscribe(
      (data: any) => {
        this.products$ = data.DT;
        console.log('data', data.DT)
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number((event.target as HTMLSelectElement)?.value);
  }
}
