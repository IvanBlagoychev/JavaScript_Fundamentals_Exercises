function count(input) {
    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = {};
    for(let w of words){
        wordsCount[w]?wordsCount[w]++:
            wordsCount[w] = 1
    }
    console.log(JSON.stringify(wordsCount));
}
count([`Far too slow, you're far too slow.`]);
count(['JS and Node.js', 'JS again and again', 'Oh, JS?']);
