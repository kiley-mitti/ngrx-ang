import { Injectable, inject } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import {exhaustMap, map, switchMap} from 'rxjs/operators'

import { BooksActions } from "./books.actions";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/interfaces/book.interfaces";

const loadBooks = createEffect(
  (bookService = inject(BookService))=>
    inject(Actions).pipe(
      ofType(BooksActions.getBooks),
      exhaustMap(()=> {
        return bookService.getBooks().pipe(
          map((books: Book[]) => BooksActions.getBooksSuccess({books}))
         )
        }
      )
    ),
  {functional: true}
)

const createBook = createEffect(
  (bookService = inject(BookService))=>
    inject(Actions).pipe(
      ofType(BooksActions.createBook),
      exhaustMap(({book})=> {
        return bookService.create(book).pipe(
          map((book: Book) => BooksActions.createBookSuccess({book}))
         )
        }
      )
    ),
  {functional: true}
)

const updateBook = createEffect(
  (bookService = inject(BookService))=>
    inject(Actions).pipe(
      ofType(BooksActions.updateBook),
      exhaustMap(({book})=> {
        return bookService.update(book).pipe(
          map((book: Book) => BooksActions.updateBookSuccess({book}))
         )
        }
      )
    ),
  {functional: true}
)

const deleteBook = createEffect(
  (bookService = inject(BookService))=>
    inject(Actions).pipe(
      ofType(BooksActions.deleteBook),
      exhaustMap(({book})=> {
        return bookService.delete(book).pipe(
          map((book: Book) => BooksActions.deleteBookSuccess({book}))
         )
        }
      )
    ),
  {functional: true}
)

export const BookEffects = {
  loadBooks,
  createBook,
  updateBook,
  deleteBook
};
