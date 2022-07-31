import { timeout } from '../decorators';

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');

    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    static department = 'devDepartment';
    private _publisher: string;
    #id: number;

    constructor(public title: string, protected year: number, id: number) {
        this.#id = id;
    }

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(value: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = value;
    }

    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}
