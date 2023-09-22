import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { Book, BookEntity } from "src/app/interfaces/book.interfaces";

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Get Books': emptyProps,
    'Get Books Success': props<{books: BookEntity}>(),
    'Create Book': props<{book: Book}>(),
    'Create Book Success': props<{book: Book}>(),
    'Update Book': props<{book: Book}>(),
    'Update Book Success': props<{book: Book}>(),
    'Delete Book': props<{book: Book}>(),
    'Delete Book Success': props<{book: Book}>(),
  }
})
