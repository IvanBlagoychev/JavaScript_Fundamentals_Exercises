function concatenateAndReverse(str) {
    let concat = Array.from(str.join(''));
    console.log(concat.reverse().join(''));
}
concatenateAndReverse(['I', 'am', 'student']);
