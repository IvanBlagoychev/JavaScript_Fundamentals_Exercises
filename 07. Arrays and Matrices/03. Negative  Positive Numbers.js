function negative(input) {
    let result = [];
    input = input.map(Number);
    for(let num of input){
        if(num < 0){ result.unshift(num); }
        else { result.push(num); }
    }
    console.log(result.join('\n'));
}
negative(['7', '-2', '8', '9']);
negative(['3', '-2', '0', '-1']);