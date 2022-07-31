import { ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(({ title: itemTitle }) => itemTitle === title);
    }

    printTitles(): void {
        this.items.forEach(({ title }) => console.log(title));
    }
}
