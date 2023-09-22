import { createReducer, createFeature, on } from "@ngrx/store";

import { BookState } from "./books.model";
import { BooksActions } from "./books.actions";


export const initialBooksState: BookState ={
  books:[],
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
    return {...state, books: [...state.books, book], isLoading: false}
  }),

  on(BooksActions.updateBook, (state) => {
    return {...state, isLoading: true}
  }),

  on(BooksActions.updateBookSuccess, (state, {book}) => {
    const newBooks = state.books.map(oldBook => oldBook.id === book.id ? book : oldBook)
    return {...state, isLoading: false, books: newBooks }
  }),

  on(BooksActions.deleteBook, (state) => {
    return {...state, isLoading: true}
  }),

  on(BooksActions.deleteBookSuccess, (state, {book}) => {
    const newBooks = state.books.filter(oldBook => oldBook.id !== book.id)
    return {...state, isLoading: false, books: newBooks}
  }),
)

export const appFeature = createFeature({
  name: 'app',
  reducer: BooksReducer,
});

