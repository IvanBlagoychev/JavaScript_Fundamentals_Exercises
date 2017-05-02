function delimiter(input) {
    let delimiter = input[input.length - 1];
    input.pop();
    let result = [];
    for (let i = 0;i < input.length;i++){
        if (i == 0) result.push(input[i]);
        else if (i != input.length){
            result.push(delimiter + input[i]);
        }
    }
    console.log(result.join(''));
}

delimiter(['one','two','three','four','five','six','-']);
delimiter(['How about no?', 'I', 'will', 'not','do', 'it!','_']);