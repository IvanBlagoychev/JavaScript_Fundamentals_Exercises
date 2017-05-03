function split(input) {
    let splitter = input.pop();
    let splited = input[0].split(splitter);
    for(let word of splited){
        word.split(splitter);
        console.log(word);
    }
}
split(['One-Two-Three-Four-Five ', '-']);
split(['http://platform.softuni.bg','.']);