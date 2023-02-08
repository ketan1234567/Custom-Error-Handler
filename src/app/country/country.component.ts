import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from './country';
import { Observable } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  templateUrl: './country.component.html'

})
export class CountryComponent implements OnInit {
  displaydata$: any = [];
  countryUpdate: any;
  tabledata: any;
  processValidation = false;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getdata();

  }
  countryForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    capital: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required)
  });
  onFormSubmit() {

    let country = this.countryForm.value;

    this.countryService.addCountry(country)
      .subscribe(data => {
        this.processValidation = true;
        this.getdata();
        this.countryForm.reset();

        console.log(data);
      },
        err => {
          throw err;
        },

      );





    //  setTimeout(() => {
    //   this.getdata();
    //  }, 2000);

  }
  getdata() {
    this.countryService.getCountry().subscribe(data1 => {
      this.displaydata$ = data1;
      this.tabledata = data1;
    });
  }
  deletedata(id: any) {
    console.log(id);
    this.countryService.DeleteData(id).subscribe(data => {
      console.log(data);
      this.getdata();

    });
  }
  updatedata() {
    const updatedata = this.countryForm.value;
    this.countryService.UpdateData(updatedata).subscribe(item => {
      console.log(item);
      this.getdata();
      this.countryForm.reset();
    })
  }
  loadCountryEdit(countrybyid: number) {
    this.countryService.getAllCountryById(countrybyid).subscribe(data => {
      this.countryUpdate = data.id
      console.log(this.countryUpdate);
      this.countryForm.setValue({ id: this.countryUpdate, name: data.name, capital: data.capital, currency: data.currency })
      this.getdata();
      this.processValidation = true;
    })
  }





}
