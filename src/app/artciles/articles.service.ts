import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = 'http://localhost:3000/article';
  constructor(private http: HttpClient) { }

  GetAllArticles():Observable<any> {
    return this.http.get(this.url)
  }
  GetByIdAricles(id:number):Observable<any> {
    return this.http.get(this.url+"/"+id);
  }
  AddArticles(data:any):Observable<any> {
    return this.http.post(this.url,data)
  }
  DeleteArticles(id:number):Observable<any> {
    return this.http.delete(this.url+"/"+id)
  }
  UpdateArticles(data:any):Observable<any> {
    return  this.http.put(this.url+"/"+data.id,data)
  }

}
