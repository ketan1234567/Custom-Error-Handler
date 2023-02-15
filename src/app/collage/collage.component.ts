import { Component, OnInit } from '@angular/core';
import { CollageService } from './collage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent implements OnInit {
  CollageData$:any;
  Updatedata:any;
  ngOnInit(){
    this.GetAllCollagesData();
}
constructor(private service:CollageService){}

// Display Data
GetAllCollagesData(){
  return this.service.GetAllCollage().subscribe(data=>{
    console.log(data);
    this.CollageData$=data;
    
  })
}
CollageForm=new FormGroup({
  id: new FormControl(),
  name:new FormControl('',Validators.required),
  category:new FormControl('',Validators.required),
  roll_no:new FormControl('',Validators.required)
});
OnFormSubmit(){
  let saveData=this.CollageForm.value;
  return this.service.AddCollage(saveData).subscribe(data=>{
    console.log(data);
    //this.CollageData$=data;
    this.GetAllCollagesData();
    
  })
}
LoadEditData(id:any){
  return this.service.GetByIdCollage(id).subscribe(data=>{
    this.UpdateData=data.id
  this.CollageForm.setValue({
    id:this.UpdateData,name:data.name,category:data.category,roll_no:data.roll_no
  });
 this.GetAllCollagesData();
    
  })
}
UpdateData(){
  const UpdateData12=this.CollageForm.value
  return this.service.UpdateData(UpdateData12).subscribe(data=>{
    console.log(data);
   // this.CollageData$=data;
  })
}
deleteData(id:number){
  return this.service.deleteCollage(id).subscribe(data=>{
    console.log(data);

   this.GetAllCollagesData();
  })
}

}
