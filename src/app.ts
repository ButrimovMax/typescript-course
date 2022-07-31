import { Category } from './enums';
import {
    createCustomer,
    getAllBooks,
    getBooksByCategory,
    getBooksByCategoryPromise,
    getObjectProperty,
    logCategorySearch,
    logSearchResults,
    purge,
} from './functions';
import { Book, Librarian, Magazine } from './interfaces';
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from './types';
import { UL, Shelf, ReferenceItem, Encyclopedia as RefBook } from './classes';

import { Library } from './classes/library';

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

if (true) {
    // const {Reader} = await import('./classes');
    // const reader = new Reader();
    // console.log(reader);
    import('./classes').then(({ Reader }) => {
        const reader = new Reader();
        console.log(reader);
    });
}

// task 05.04
const favouriteLibrarian: Librarian = new UL.UniversityLibrarian();
favouriteLibrarian.name = 'Max';
favouriteLibrarian.assistCustomer('Boris', getAllBooks()[1].title);
console.log(favouriteLibrarian);

// task 05.05

const personBook: PersonBook = {
    author: 'Anna',
    available: true,
    category: Category.Angular,
    email: 'dev@dev.com',
    id: 1000,
    name: 'Dev',
    title: 'Test',
};

// task 06.03

// const refBook = new RefBook('Learn TypeScript', 2022, 3, 1);
// printRefBook(refBook);

// const lib: Library = new Library();
// lib.id = 10;

// task 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// const books = purge(inventory);
// console.log(books);
// const numbers = purge([1, 2, 3]);
// console.log(numbers);

// task 07.02

// const bookShelf = new Shelf<Book>();

// inventory.forEach(book => {
//     bookShelf.add(book);
// });

// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => {
//     magazineShelf.add(magazine);
// });

// console.log(magazineShelf.getFirst());

// magazineShelf.printTitles();

// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(inventory[0], 'author'));

// Task 07.04

// const requiredBooks: BookRequiredFields = {
//     id: 123,
//     author: 'Test',
//     available: false,
//     category: Category.Angular,
//     pages: 200,
//     title: 'Test title',
//     markDamaged: null,
// };

// const updatedBook: UpdatedBook = {
//     id: 10,
//     title: 'Test title',
// };

// const params: Parameters<СreateCustomerFunctionType> = ['Max', 25, 'Kharkiv'];
// createCustomer(...params);

// task 08.01

// const lib = new UniversityLibrarian();

// task 08.02

// console.log(lib);
// lib.name = 'Anna';
// lib['printLibrarian']();

// task 08.03

// const lib = new UL.UniversityLibrarian();
// lib.assistFaculty = null;
// lib.teachCommunity = null;

// console.log(lib);

// Object.getPrototypeOf(lib).assistFaculty = null;

// task 08.04

// const refBook = new RefBook('Learn TypeScript', 2022, 3, 1);
// refBook.printItem();

// task 08.05

// const lib = new UL.UniversityLibrarian();

// console.log(lib);

// lib.name = 'Max';
// lib.assistCustomer('Dev', 'You dont know JS');

// task 08.06

// const lib = new UL.UniversityLibrarian();

// console.log(lib);

// lib.name = 'Max';
// lib.assistCustomer('Dev', 'You dont know JS');
// console.log(lib.name);

// task 08.07

// const refBook = new RefBook('Learn TypeScript', 2022, 3, 1);

// refBook.copies = 10;

// task 09.01

// console.log('begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end');

// task 09.02

// console.log('begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => console.log('Complete'));
// console.log('end');

// task 09.03

console.log('begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(console.error);
console.log('end');
