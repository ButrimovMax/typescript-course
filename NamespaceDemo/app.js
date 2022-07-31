/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
var fee = util.calculateLateFee(25);
console.log(fee);
var books = Utility.maxBooksAllowed(25);
console.log(books);
