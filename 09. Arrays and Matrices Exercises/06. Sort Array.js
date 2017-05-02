function sortWords(words) {
    words.sort((a,b) => a.length-b.length || a.localeCompare(b));
    console.log(words.join('\n'));
}
sortWords(['Isacc','Theodor','Jack','Harrison','George']);
sortWords(['alpha', 'beta', 'gamma']);
sortWords(['test','Deny','omen','Default']);

