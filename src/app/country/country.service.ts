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
  addCountry(country:Country):Observable<Country>{
    return this.http.post<Country>(this.url,country)

  }
  getCountry():Observable<Country>{
    return this.http.get<Country>(this.url)

  }
  DeleteData(id:number):Observable<Country>{
    return this.http.delete<Country>(this.url+"/"+id)
  }
  UpdateData(data:Country):Observable<Country>{

    return this.http.put<Country>(this.url+"/"+data.id,data);

  }
  getAllCountryById(id:number):Observable<Country>{
    return this.http.get<Country>(this.url+"/"+id)

  }

}
