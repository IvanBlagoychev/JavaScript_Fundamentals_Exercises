function odd(input) {
    let num = input[0];
    for (let i = 1;i <= num;i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
odd([4]);
odd([7]);