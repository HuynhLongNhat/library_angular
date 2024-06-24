import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private HttpClient: HttpClient) {

    }
    // Api login register
    registerUser(data: any) {
        return this.HttpClient.post("http://localhost:8080/register ", data)
    }
    loginUser(data: any) {
        return this.HttpClient.post("http://localhost:8080/login ", data)
    }
    //API CRUD Book
    getAllBook() {
        return this.HttpClient.get("http://localhost:8080/book/read")
    }



    createNewBook(data: any) {
        return this.HttpClient.post("http://localhost:8080/book/create", data)
    }

    destroyBook(bookId: any) {
        return this.HttpClient.delete(`http://localhost:8080/book/delete/${bookId}`);

    }

    updateBook(data: any) {
        return this.HttpClient.put("http://localhost:8080/book/update", { ...data });
    }


    // Api CRUD staff

    getAllStaff() {
        return this.HttpClient.get("http://localhost:8080/staff/read")
    }


    createNewStaff(data: any) {
        return this.HttpClient.post("http://localhost:8080/staff/create", data)
    }

    updateStaff(data: any) {
        return this.HttpClient.put("http://localhost:8080/staff/update", { ...data })
    }

    deleteStaff(staffId: any) {
        return this.HttpClient.delete(`http://localhost:8080/staff/delete/${staffId}`);

    }


    // Api CRUD reader

    getAllReader() {
        return this.HttpClient.get("http://localhost:8080/reader/read")
    }


    createNewReader(data: any) {
        return this.HttpClient.post("http://localhost:8080/reader/create", data)
    }

    updateReader(data: any) {
        return this.HttpClient.put("http://localhost:8080/reader/update", { ...data })
    }

    deleteReader(readerId: any) {
        return this.HttpClient.delete(`http://localhost:8080/reader/delete/${readerId}`);

    }

    //Api request 
    getAllRequest() {
        return this.HttpClient.get("http://localhost:8080/request/read")
    }

    createNewRequest(data: any) {
        return this.HttpClient.post("http://localhost:8080/request/create", data)
    }

    updateRequest(data: any) {
        return this.HttpClient.put("http://localhost:8080/request/update", { ...data })
    }

    returnBook(requestId: any) {
        return this.HttpClient.delete(`http://localhost:8080/request/delete${requestId}`)
    }
}