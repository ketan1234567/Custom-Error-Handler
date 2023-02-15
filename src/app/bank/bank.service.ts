import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Bank } from './Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
  BankUrl='http://localhost:3000/Bank';

  GetAllBanks():Observable<any>{
    return this.http.get(this.BankUrl).pipe(
     // tap(bankName=>(console.log(bankName))),
      catchError(this.handleError)
    )
  }
  GetElementById(id:any):Observable<any>{
    return this.http.get(this.BankUrl+"/"+id).pipe(
    //  tap(id=>(console.log(id))),
      catchError(this.handleError)
      
    )
  }
  AddBankName(data:any):Observable<any>{
    return this.http.post(this.BankUrl,data).pipe(
      tap(id=>(console.log(id))),
      catchError(this.handleError)
      
    )
  }
  deleteBankName(id:any):Observable<any>{
    return this.http.delete(this.BankUrl+"/"+id).pipe(
      tap(id=>(console.log(id))),
      catchError(this.handleError)
    )
  }
  UpdateBankName(data:any):Observable<any>{
    return this.http.put(this.BankUrl+"/"+data.id,data)
  }
  private handleError(error:any){
    console.log(error);
    return throwError(error);
  }
}
