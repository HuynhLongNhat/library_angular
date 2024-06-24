import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private bookSource = new BehaviorSubject<any>(null);
    currentBook = this.bookSource.asObservable();

    constructor() { }

    changeBook(book: any) {
        this.bookSource.next(book);
    }
}