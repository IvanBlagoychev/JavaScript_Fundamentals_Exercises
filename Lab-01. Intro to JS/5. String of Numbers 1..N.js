function stringOfNumbers(input) {
    let line = "";
    let num = Number(input[0]);
    for(let i = 1;i <= num; i++){
        line += i;
    }
    console.log(line);
}

stringOfNumbers(['11']);