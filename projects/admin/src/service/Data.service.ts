import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private HttpClient: HttpClient) {

    }

    getAllBook() {
        return this.HttpClient.get("http://localhost:8080/book/read")
    }


}