export interface Book {
  id: number;
  name: string;
}

export interface BookEntity {
  [id: string]: Book
}
