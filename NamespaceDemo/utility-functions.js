var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(days) {
            return 0.25 * days;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFn() {
        console.log('this is private function');
    }
})(Utility || (Utility = {}));
