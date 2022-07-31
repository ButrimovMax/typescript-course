/// <reference path="utility-functions.ts" />
import util = Utility.Fees;

const fee = util.calculateLateFee(25);
console.log(fee);

const books = Utility.maxBooksAllowed(25);
console.log(books);
