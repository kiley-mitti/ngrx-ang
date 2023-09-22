import { Injectable } from "@angular/core";
import { Book } from "../interfaces/book.interfaces";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookList: Book[] = [
    {
      id: Math.random(),
      name: 'Book 1'
    },
    {
      id: Math.random(),
      name: 'Book 2'
    },    {
      id: Math.random(),
      name: 'Book 3'
    },    {
      id: Math.random(),
      name: 'Book 4'
    },
    {
      id: Math.random(),
      name: 'Book 5'
    },
  ]

  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(this.bookList)
  }

  create(book: Book): Observable<Book>{
    this.bookList = [...this.bookList, book]
    return of(book)
  }

  update(updateBook: Book): Observable<Book>{
    this.bookList.map(book => book.id === updateBook.id ? updateBook : book)
    return of(updateBook)
  }

  delete(bookToDelete: Book): Observable<Book> {
    this.bookList = this.bookList.filter( book => book.id !== bookToDelete.id)
    return of(bookToDelete)
  }

}
