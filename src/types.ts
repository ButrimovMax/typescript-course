import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Book & Person;
export type BookOrUndefined = Book | undefined;
export type printBookReturnType = `${Book['title']} by ${Book['author']}`;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = typeof createCustomer;

type fn = (a: string, b: number, c: boolean) => symbol;

type ParamA<T> = T extends (a: infer U, b: number, c: boolean) => symbol ? U : never;
type ParamB<T> = T extends (a: string, b: infer U, c: boolean) => symbol ? U : never;
type ParamC<T> = T extends (a: string, b: number, c: infer U) => symbol ? U : never;
type P1 = ParamA<fn>;
type P2 = ParamB<fn>;
type P3 = ParamC<fn>;

type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];
type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
type Rt = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;
