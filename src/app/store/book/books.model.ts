import { Book } from "src/app/interfaces/book.interfaces";

export interface BookState {
  books: {[id: string]: Book};
  isLoading: boolean;
}
