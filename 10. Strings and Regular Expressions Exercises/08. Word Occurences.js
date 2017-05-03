function wordOccurrences([string, word]) {
    let result = [];
    var regexExpression ="\\b(" + word + ")\\b";
    var regex = new RegExp(regexExpression, "ig");
    while ( match = regex.exec(string) ){
        result.push(match);
    }
    console.log(result.length);

}
wordOccurrences(['The waterfall was so high, that the child couldn’t see its peak.', 'the']);