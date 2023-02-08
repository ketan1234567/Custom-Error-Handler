import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url= "http://localhost:3000/country";  
  constructor(private http:HttpClient) { }
  addCountry(country:any):Observable<any>{
    return this.http.post<Country>(this.url,country)

  }
  getCountry():Observable<any>{
    return this.http.get<Country>(this.url)

  }
  DeleteData(id:any):Observable<any>{
    return this.http.delete<Country>(this.url+"/"+id)
  }
  UpdateData(data:any):Observable<any>{
    return this.http.put<any>(this.url+"/"+data.id,data);

  }
  getAllCountryById(id:number):Observable<Country>{
    return this.http.get<Country>(this.url+"/"+id)

  }

}
