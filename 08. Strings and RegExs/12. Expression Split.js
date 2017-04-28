function expressionsSplit(input) {
    let expression = input[0];
    let elements = expression.split(/[\s.;(),]+/g);
    console.log(elements.join("\n"));
}
expressionsSplit(['let sum = 4 * 4,b = "wow";']);
