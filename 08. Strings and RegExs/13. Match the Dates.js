(function matchDates() {
    let text = "I was born at 14-Jun-1980. Today is 29-Sep-2016. Next year starts at 1-Jan-2017 and ends at 31-Dec-2017.";
    let regex = /\d{1,2}-\w{1,3}-\d{1,4}/g;
    console.log(text.match(regex));
})();
