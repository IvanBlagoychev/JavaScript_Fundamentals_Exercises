function aggregateTable(input) {
    let result = [], sum = 0;
    for (let line of input){
        let townData = line.split('|');
        let townName = townData[1].trim();
        let townIncome = townData[2].trim();
        result.push(townName);
        sum += Number(townIncome);
    }
    console.log(result.join('\n'));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300','| Veliko Tarnovo  | 500','| Yambol          | 275']);
