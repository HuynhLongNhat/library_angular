import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReaderService {
    private ReaderSource = new BehaviorSubject<any>(null);
    currentStaff = this.ReaderSource.asObservable();

    constructor() { }

    changeReader(book: any) {
        this.ReaderSource.next(book);
    }
}