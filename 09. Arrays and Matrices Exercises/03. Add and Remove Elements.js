function addOrRemove(input) {
    let result = [];
    result[0] = 1;
    for (let i = 1;i < input.length;i++){
        if (input[i] == "add")
            result.push(i+1);

        else if (input[i] == "remove")
            result.pop();
    }
    console.log(result.join('\n'));
}
addOrRemove(['add','add','add','add']);
addOrRemove(['add','add','remove','add','add']);
addOrRemove(['remove','remove','remove']);