function binaryToDecimal(input) {
    let binary = Number(input[0]);
    let decimal = parseInt(binary, 2);
    console.log(decimal);
}
binaryToDecimal(['11110000']);