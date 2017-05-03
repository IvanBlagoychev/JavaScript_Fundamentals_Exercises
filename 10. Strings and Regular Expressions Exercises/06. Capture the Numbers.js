function catchTheNums(input) {
    let path = /\d+/g;
    let result = [];
    for(let line of input){
        if(path.test(line) == true){
            result.push(line.match(path));
        }
    }
    console.log(result.join(" "));
}

catchTheNums(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);