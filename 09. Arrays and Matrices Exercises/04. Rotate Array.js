function rotate(input) {
    let rotations = Number(input[input.length-1]);
    input.pop();
    for (let i = 0;i < rotations;i++){
        let element = input.pop();
        input.unshift(element);
    }
    console.log(input.join(' '));
}
rotate(['1','2','3','4','2']);
rotate(['banana', 'orange', 'coconut', 'apple', '15']);