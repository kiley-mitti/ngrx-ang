import { Injectable } from "@angular/core";
import { Book, BookEntity } from "../interfaces/book.interfaces";
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

  private bookEntity: BookEntity = this.bookList.reduce((prev, next)=>({...prev, [next.id]: next}), {})

  constructor() {}

  getBooks(): Observable<BookEntity> {
    return of(this.bookEntity)
  }

  create(book: Book): Observable<Book>{
    this.bookEntity = {...this.bookEntity, [book.id]: book}
    return of(book)
  }

  update(updateBook: Book): Observable<Book>{
    this.bookEntity = {...this.bookEntity, [updateBook.id]: updateBook}
    return of(updateBook)
  }

  delete(bookToDelete: Book): Observable<Book> {
    const id = `${bookToDelete.id}`
    const { [id]: remove, ...books} = this.bookEntity
    console.log(books)
    // this.bookEntity = {books}
    return of(bookToDelete)
  }

}
