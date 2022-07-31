import { Category } from './enums';
import { Book, TOptions, LibMgrCallback, Callback } from './interfaces';
import { BookOrUndefined, BookProperties, printBookReturnType } from './types';
import { ReferenceItem } from './classes/reference-item';

/* eslint-disable no-redeclare */
export function getAllBooks(): readonly Book[] {
    const collection: Book[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        },
    ];

    return collection;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
    const availableBook = books.find(function (item) {
        return item.available;
    });
    console.log(books.length);
    console.log(availableBook?.title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(function (book) {
            return book.category === category;
        })
        .map(function (filteredBooks) {
            return filteredBooks.title;
        });
}

export function logBookTitles(books: string[]): void {
    console.log(books);
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author } = getAllBooks()?.[index];
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce(function (amount, item) {
        const totalPages = BigInt(item.avgPagesPerBook * item.books);
        return amount + totalPages;
    }, 0n);
}

export function createCustomerId(name: string, id: number): string {
    return `id: ${id}, name: ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`name: ${name}`);
    if (age) {
        console.log(`age: ${age}`);
    }
    if (city) {
        console.log(`city: ${city}`);
    }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...booksIDs: number[]): void {
    // getAllBooks()
    //     .filter(({ id }) => bookIDs.includes(id))
    //     .forEach(({ title }) => console.log(`customer: ${customer}, book: ${title}`));
    booksIDs.forEach(id => {
        const book = getBookByID(id)?.title;
        console.log(`customer: ${customer}, book: ${book}`);
    });

    booksIDs
        .map(id => getBookByID(id))
        .filter(({ available }) => available)
        .map(({ title }) => title);
}

export function getTitles(author: string): Book[];
export function getTitles(available: boolean): Book[];
export function getTitles(id: number, available: boolean): Book[];

export function getTitles(...args: any[]) {
    if (args.length === 1) {
        if (typeof args[0] === 'string') {
            return getAllBooks().filter(({ author }) => author === args[0]);
        }
        if (typeof args[0] === 'boolean') {
            return getAllBooks().filter(({ available }) => available === args[0]);
        }
    }

    if (args.length === 2) {
        if (typeof args[0] === 'number' && typeof args[1] === 'boolean') {
            return getAllBooks().filter(({ available, id }) => id === args[0] && available === args[1]);
        }
    }

    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return title.split('').reverse().join('');
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof ReferenceItem);
    data.printItem();
}

export function printBook(book: Book): printBookReturnType {
    return `${book.title} by ${book.author}`;
}

export function getProperty(book: Book, bookProp: BookProperties): any {
    const prop = book[bookProp];

    if (typeof prop === 'function') {
        return prop.name;
    }

    return prop;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(
    obj: TObject,
    key: TKey,
): TObject[TKey] | string {
    const prop = obj[key];

    if (typeof prop === 'function') {
        return prop.name;
    }

    return prop;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 50;
    return options;
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found!');
            }
        } catch (e) {
            callback(e, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.error(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found!');
            }
        }, 2000);
    });

    return p;
}

export async function logSearchResults(category: Category) {
    const titles: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
    console.log(titles);
}
