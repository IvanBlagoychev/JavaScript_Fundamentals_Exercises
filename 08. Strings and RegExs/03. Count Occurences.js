function countText(input) {
    let [key, text] = [input[0], input[1]];
    let index = text.indexOf(key);
    let count = 0;
    while (index > -1)
    {
        count++;
        index = text.indexOf(key, index + 1);
    }
    console.log(count);
}
countText(['am', 'I am cool. Bam']);
countText(['the', 'The quick brown fox jumps over the lay dog.']);