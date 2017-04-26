function letterCount(input) {
    let word = input[0];
    let letter = input[1];
    let count = 0;
    for (let i in word){
        if (word[i] == letter){
            count++;
        }
    }
    console.log(count);
}

// letterCount(['hello', 'l']);