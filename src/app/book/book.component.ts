import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  DisplayBookdata$: any;
  Editid: any;
  ngOnInit(): void {
    this.getbooksData();


  }
  constructor(private BookServices: ServiceService) { }

  BookForm = new FormGroup({
    id: new FormControl(),
    book_name: new FormControl('', Validators.required),
    book_category: new FormControl('', Validators.required),
    book_author: new FormControl('', Validators.required),

  });

  getbooksData() {
    this.BookServices.GetAllBooks().subscribe(data => {
      // console.log(data);
      this.DisplayBookdata$ = data;
    })
  }

  loadEditData(id: number) {
    this.BookServices.GetBookById(id).subscribe(data => {
      this.Editid = data.id;
      this.BookForm.setValue({
        id: this.Editid, book_name: data.book_name, book_category: data.book_category, book_author: data.book_author
      });

    })

  }
  UpdateData() {
    const Updatedata = this.BookForm.value
    this.BookServices.UpdateBook(Updatedata).subscribe(data => {
      console.log(data);
      this.BookForm.reset();
      this.getbooksData();


    })

  }
  deletedata(id: number) {
    this.BookServices.deleteBook(id).subscribe(data => {
      //console.log(data);
      this.getbooksData();
    })
  }


  OnSubmitForm() {
    const books_obj = this.BookForm.value;
    this.BookServices.AddBooks(books_obj).subscribe(data => {
      console.log(data);
      this.getbooksData();
      this.BookForm.reset();
    })


  }

}
