function extract(input) {
    let result = [];
    result[0] = input[0]; let max = input[0];
    for (let i = 1;i < input.length;i++){

        if (input[i] > max) {
            max = input[i];
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));
}
extract([1,3,8,4,10,12,3,2,24]);
extract([1,2,3,4]);
extract([20,3,4,15,6,1]);