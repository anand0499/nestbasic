import { Injectable, Param } from "@nestjs/common";

@Injectable()
export class BookService{
    addBook(): any{
        return "This will add books";
    }

    updateBook():any{  
        return "This will read the book";
    }

    deleteBook():any{
        return "This will help to delete the book";
    }

    findBook():any{
        console.log(books)
        return books;
    }
}