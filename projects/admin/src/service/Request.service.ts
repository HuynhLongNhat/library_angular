import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private requestSource = new BehaviorSubject<any>(null);
    currentStaff = this.requestSource.asObservable();

    constructor() { }

    changeRequest(book: any) {
        this.requestSource.next(book);
    }
}