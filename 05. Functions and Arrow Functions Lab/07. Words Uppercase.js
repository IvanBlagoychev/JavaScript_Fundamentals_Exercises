function upper(input) {

    let str = input[0].toUpperCase();
    let splitedStr = ExtractWords();
    splitedStr = splitedStr.filter(w=>w!='');
    return splitedStr.join(', ');

    function ExtractWords (){
        return str.split(/\W+/);
    }
}
console.log(upper(['Hi, how are you?']));
console.log(upper(['Hello functions']));
// console.log(extractWords(['Hello functions']));       ReferenceError
