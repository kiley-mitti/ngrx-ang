import { Book } from "src/app/interfaces/book.interfaces";

export interface BookState {
  books: Book[];
  isLoading: boolean;
}
