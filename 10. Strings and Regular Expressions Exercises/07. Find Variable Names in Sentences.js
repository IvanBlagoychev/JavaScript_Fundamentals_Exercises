function findVariables(input) {
    let result = [];
    let match;
    let path = /\b_([A-Za-z0-9]+)\b/g;
    while (match = path.exec(input)){
        result.push(match[1])
    }

    console.log(result.join(' '));
}
findVariables(['The _id and _age variables are both integers.']);