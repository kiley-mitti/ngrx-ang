import { createReducer, createFeature, on } from "@ngrx/store";

import { BookState } from "./books.model";
import { BooksActions } from "./books.actions";


export const initialBooksState: BookState ={
  books:{},
  isLoading: false,
}

export const BooksReducer = createReducer<BookState>(
  initialBooksState,
  on(BooksActions.getBooks, (state) => {
    return {...state, isLoading: true}
  }),

  on(BooksActions.getBooksSuccess, (state, {books})=>{
    return{ ...state, isLoading: false, books}
  }),

  on(BooksActions.createBook, (state) => {
    return {...state, isLoading: true}
  }),

  on(BooksActions.createBookSuccess, (state, {book}) => {
    return {...state, books: {...state.books, [book.id]: book}, isLoading: false}
  }),

  on(BooksActions.updateBook, (state) => {
    return {...state, isLoading: true}
  }),

  on(BooksActions.updateBookSuccess, (state, {book}) => {
    return {...state, books: {...state.books, [book.id]: book}, isLoading: false}
  }),

  on(BooksActions.deleteBook, (state) => {
    return {...state, isLoading: true}
  }),

  on(BooksActions.deleteBookSuccess, (state, {book}) => {

    const {[book.id]: remove, ...otherBooks} = state.books
    return {...state, isLoading: false, books: otherBooks}
  }),
)

export const appFeature = createFeature({
  name: 'app',
  reducer: BooksReducer,
});

