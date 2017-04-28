function matchWords(input) {
   if (Array.isArray(input)) input = input[0];
    console.log(input.match(/\w+/g).join('|'));
}
matchWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);