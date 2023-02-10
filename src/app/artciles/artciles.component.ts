import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-artciles',
  templateUrl: './artciles.component.html',
  styleUrls: ['./artciles.component.css']
})
export class ArtcilesComponent implements OnInit {
  ArticleDisplayData$:any;
  EditArticleId: any;
  constructor(private articleServices:ArticlesService){}
  ngOnInit(): void {
    this.displayArticles();
  }
  ArticleForm=new FormGroup({
    id:new FormControl(),
    article_name:new FormControl('',Validators.required),
    article_category:new FormControl('',Validators.required),
    article_author:new FormControl('',Validators.required)
  });
  OnFormSubmit(){
    const Article_obj=this.ArticleForm.value;
    this.articleServices.AddArticles(Article_obj).subscribe(data=>{
      console.log(data);
      this.displayArticles(); 
    })
    
  }

displayArticles(){
  this.articleServices.GetAllArticles().subscribe(data=>{
    console.log(data);
    this.ArticleDisplayData$=data;   
  })
}

deletedata(id:number){
  this.articleServices.DeleteArticles(id).subscribe(data=>{
    //console.log(data);
   // this.ArticleDisplayData$=data;   
   this.displayArticles();
  })
}
loadEditArticles(id:any){
  this.articleServices.GetByIdAricles(id).subscribe(data=>{
    this.EditArticleId=data.id;
    this.ArticleForm.setValue({id:this.EditArticleId,article_name:data.article_name,article_category:data.article_category,article_author:data.article_author})

  })
  
}
UpdateData(){
  const updateArticles=this.ArticleForm.value
  this.articleServices.UpdateArticles(updateArticles).subscribe(data=>{
    console.log(data);
    this.displayArticles();
    //this.ArticleDisplayData$=data;   
  })
}

}
