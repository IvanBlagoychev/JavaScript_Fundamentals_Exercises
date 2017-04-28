function censor(input) {
    let text = input[0];
    let words = input.slice(1);
    for( let word of words){
        let replaced = '-'.repeat(word.length);
        while(text.indexOf(word) > -1){
            text = text.replace(word, replaced);
        }
    }
    console.log(text);
}
censor(['I like C#, HTML, JS and PHP','C#', 'HTML', 'PHP']);

