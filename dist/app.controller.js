"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
let books = {
    1: {
        id: 1,
        name: "Anand Choubey",
        address: "Rishra",
    },
    2: {
        id: 2,
        name: "Manish yadav",
        address: "Kalinga"
    },
    3: {
        id: 3,
        name: "Mukesh Sharma",
        address: "Kolkata",
    }
};
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    addBook() {
        return this.bookService.addBook();
    }
    updateBook() {
        return this.bookService.updateBook();
    }
    deleteBook() {
        return this.bookService.deleteBook();
    }
    findBook(books) {
        console.log("Controllers", books);
        return this.bookService.findBook();
    }
};
__decorate([
    (0, common_1.Post)("add"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Put)("/update"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BookController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Get)('/findallbooks'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], BookController.prototype, "findBook", null);
BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=app.controller.js.map