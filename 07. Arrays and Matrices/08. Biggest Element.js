function LargestElement (arr) {
    let input = arr.map(Number).sort((a, b) => a-b);
    console.log(input[0]);
}

LargestElement([3,-2,-18,-5348]);