import { Component, OnInit } from '@angular/core';
import { BankService } from './bank.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  displayBankName$: any;
  statusCode: any;
  updateId:any;
  requestProcessing:any;
  processValidation = false;
  constructor(private services: BankService) { }
  ngOnInit() {
    this.GetAllBankNames();
 
  }
  GetAllBankNames() {
    this.services.GetAllBanks().subscribe(
      data => this.displayBankName$ = data,
      errorcode => this.statusCode = errorcode);
  }
  BankForm=new FormGroup({
    id:new FormControl(),
    Bank_name:new FormControl('',Validators.required),
    Bank_category:new FormControl('',Validators.required),
    Bank_author:new FormControl('',Validators.required)
  });
  onFormSubmit() {
    const saveBankFormData=this.BankForm.value;
    this.services.AddBankName(saveBankFormData).subscribe(data=>{
      // Expecting createing user 
      this.statusCode=201;
      this.processValidation = true;
      this.GetAllBankNames();
      this.reset();
    })
  }
  deleteBankName(id:any) {
    this.services.deleteBankName(id).subscribe(data=>{
    })
      this.statusCode=204;
      this.GetAllBankNames();
  }
  loadEditBankName(id:number) {
    this.services.GetElementById(id).subscribe(data=>{
    this.updateId=data.id
     this.BankForm.setValue({id:this.updateId,Bank_name:data.Bank_name,Bank_category:data.Bank_category,Bank_author:data.Bank_author});
     this.processValidation = true;
   });
  }
  UpdateBankNames() {
    let UpdateData=this.BankForm.value
    this.services.UpdateBankName(UpdateData).subscribe(data=>{
      this.statusCode=200;
      this.GetAllBankNames();
      this.reset();
    });
        
        //
       //
  }
reset(){
  this.BankForm.reset();
}
}
