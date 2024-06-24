import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private staffSource = new BehaviorSubject<any>(null);
    currentStaff = this.staffSource.asObservable();

    constructor() { }

    changeStaff(book: any) {
        this.staffSource.next(book);
    }
}