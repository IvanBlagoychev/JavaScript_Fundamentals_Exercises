function even(input) {
    let arr = [];
    for (let i = 0;i < input.length;i++){
        if (i % 2 == 0) arr.push(input[i]);
    }
    console.log(arr.join(' '));
}
even([20,30,40,50,60]);
even(['20','30','40']);