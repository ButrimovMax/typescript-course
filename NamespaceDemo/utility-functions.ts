namespace Utility {
    export namespace Fees {
        export function calculateLateFee(days: number) {
            return 0.25 * days;
        }
    }
    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFn() {
        console.log('this is private function');
    }
}
