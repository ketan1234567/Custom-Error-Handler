import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollageService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/collage';

  // Fetch Data From Url 
  GetAllCollage(): Observable<any> {
    return this.http.get(this.url).pipe(
      // tap( data=>(console.log(data))),
      catchError(this.handleError)
    )
  }
  // Fetch Id from url 
  GetByIdCollage(id: any): Observable<any> {
    return this.http.get(this.url + "/" + id).pipe(
      // tap( data=>(console.log(data))),
      catchError(this.handleError)
    )
  }
  // Fetch Data From Url 
  AddCollage(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      // tap( data=>(console.log(data))),
      catchError(this.handleError)
    )
  }
  // delete Data From  Api 
  deleteCollage(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id).pipe(
      // tap( data=>(console.log(data))),
      catchError(this.handleError)
    )
  }
  UpdateData(data: any): Observable<any> {
    return this.http.put(this.url + "/" + data.id,data).pipe(
      // tap( data=>(console.log(data))),
      catchError(this.handleError)
    )
  }
  private handleError(error: any) {
    console.log(error);
    return throwError(error);


  }
}
