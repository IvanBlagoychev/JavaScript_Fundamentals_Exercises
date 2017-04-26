function calcRate(input) {
    let [p,i,n,t] = [input[0],input[1],input[2],input[3]].map(Number);
    i /= 100;
    let frequency = 12/n;
    let total = p * Math.pow(1 + i / frequency, frequency * t);
    console.log(total.toFixed(2));
}

calcRate([100000, 5, 12, 25]);


