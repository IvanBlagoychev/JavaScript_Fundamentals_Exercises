function sumByTown(input) {
    let obj = {};
    for (let i = 0;i < input.length;i+=2){
        let [town, income] = [input[i], Number(input[i+1])];
        if (obj[town] == undefined){
            obj[town] = income;
        }
        else{
            obj[town] += income;
        }
    }
    console.log(JSON.stringify(obj));
}
sumByTown(['Sofia','20', 'Varna','10', 'Sofia','5']);