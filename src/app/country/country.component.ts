import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from './country';
import { Observable } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit{
  displaydata$:any=[];
  countryUpdate:any;
  constructor(private countryService:CountryService){}

  ngOnInit() {
    this.getdata();
   

  }
  countryForm=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    capital:new FormControl(),
    currency:new FormControl(),
  });
  onFormSubmit() {
    let country = this.countryForm.value;
    this.countryService.addCountry(country)
       .subscribe(data => {
       console.log(data);
     },
     err => {
       throw err;
     }
       );
 }
 getdata(){
  this.countryService.getCountry().subscribe(data=>{
    this.displaydata$=data;
  });
 }
 deletedata(id:any){
  console.log(id);
  this.countryService.DeleteData(id).subscribe(data=>{
    console.log(data);
    this.getdata();
    
  });
 }
 updatedata(id:number){
}
loadCountryEdit(countrybyid:any){
  this.countryService.getAllCountryById(countrybyid).subscribe(data=>{
this.countryUpdate=data.id;


  })
}





}
