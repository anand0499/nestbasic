import { BookService } from "./book.service";
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    addBook(): string;
    updateBook(): string;
    deleteBook(): any;
    findBook(books: any): any;
}
