function extract(input) {
    let str = input[0];
    let result = [];
    let startIndex = str.indexOf('(');
    while (startIndex > -1){
        let endIndex = str.indexOf(')', startIndex);
        if(endIndex == -1){
            break;
        }
        let snippet = str.substring(startIndex + 1,endIndex);
        result.push(snippet);
        startIndex = str.indexOf('(', endIndex);
    }
    console.log(result.join(', '));
}
extract(['Rakiya (Bulgarian brandy) is home-made liquor (alcoholic drink). It can be made of grapes, plums or other fruits (even apples).']);