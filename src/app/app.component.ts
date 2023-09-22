import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Store, State } from '@ngrx/store';
import { appFeature } from './store/book/books.state';
import { BooksActions } from './store/book/books.actions';
import { OnInit } from '@angular/core';
import { BookState } from './store/book/books.model';
import { Book } from './interfaces/book.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule, FormsModule],
})
export class AppComponent implements OnInit{
  title = 'ngrx-ang';
  books$: Observable<Book[]>
  isLoading$: Observable<boolean>
  bookUpdating?: number
  updatedBookName: string = ''

  constructor(private store: Store){
    this.store.dispatch(BooksActions.getBooks())
    this.books$ = this.store.select(appFeature.selectBooks)
    this.isLoading$ = this.store.select(appFeature.selectIsLoading)
  }

  ngOnInit(): void {
  }

  onCreateBook(name: string):void{
    this.store.dispatch(BooksActions.createBook({
      book: {
      id: Math.random(),
      name
      }
    }))
  }
  updateBook(book: Book):void{
    if(this.bookUpdating){
      this.onUpdateBook({id: book.id, name: this.updatedBookName})
      this.bookUpdating = undefined
    } else {
      this.updatedBookName = book.name
      this.bookUpdating = book.id
    }

  }
  onUpdateBook(book: Book):void {
    this.store.dispatch(BooksActions.updateBook({book}))
  }

  onDeleteBook(book: Book): void {
    this.store.dispatch(BooksActions.deleteBook({book}))
  }

}
