function townsToJSON(input) {
    let cityArr = [];
    let slicedInput = input.shift();
    for(let line of input){
        let splitedLine = line.split('|');
        let obj = {Town:splitedLine[1], Latitude:splitedLine[2], Longitude:splitedLine[3]};
        cityArr.push(obj);
    }
   console.log(JSON.stringify(cityArr));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);