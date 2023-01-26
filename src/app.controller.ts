import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";


let books={
    1:{
        id:1,
        name:"Anand Choubey",
        address:"Rishra",
    },
    2:{
        id:2,
        name:"Manish yadav",
        address:"Kalinga"
    },
    3:{
        id:3,
        name:"Mukesh Sharma",
        address:"Kolkata",
    }
}


@Controller('book')
export class BookController{

    // public bookService:BookService= new BookService;

    //NestJs has provided me with the object
    constructor(private bookService:BookService){

    }


    //Add Books
    @Post("add")
    addBook():string{
        // return "This will add books";
        return this.bookService.addBook();
    }
    //Update Books
    @Put("/update")
    updateBook():string{  
        // return "This will read the book";
        return this.bookService.updateBook();
    }
    //Delete Books
    @Delete("/delete")
    deleteBook():any{
        // return "This will help to delete the book";
        return this.bookService.deleteBook();
    }
    //Find all Books 
    @Get('/findallbooks')
    findBook(@Body() books):any{
        // return "helps to find the books";
        console.log("Controllers",books);
        return this.bookService.findBook();
    }

    // @Get('/findBookById/:bookId')
    // findBookById(@Param() params):any{
    //     console.log(params.bookId);
    //     return `This will find a book by id #${params.bookId}`
    // }
}