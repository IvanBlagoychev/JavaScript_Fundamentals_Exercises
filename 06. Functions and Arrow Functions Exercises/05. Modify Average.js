function addTheNine(input) {
    let num = input[0];
    if (average(num) < 5){
        while (average(num) <= 5){
            num += '9';
        }
        console.log(num);
    }
    else if (average(num) > 5) console.log(num);

    function average(num){
        let count = 0;
        let sum = 0;
        let averageNum = 0;
        for (let i = 0;i < num.length;i++){
            count++;
            sum += Number(num[i]);
            averageNum = sum / count;
        }
        averageNum = averageNum.toString();
        return averageNum;
    }
}
addTheNine(['5835']);
addTheNine(['101']);