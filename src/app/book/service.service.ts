import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/books';
  GetAllBooks() {
    return this.http.get(this.url);
  }
  GetBookById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id)
  }
  AddBooks(data:any): Observable<any> {
    return this.http.post(this.url ,data)
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id)
  }
  UpdateBook(data: any): Observable<any> {
    return this.http.put(this.url+"/"+data.id,data)
  }
}
