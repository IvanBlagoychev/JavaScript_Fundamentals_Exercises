function kNumSeq(input) {
    let n = Number(input[0]);
    let k = Number(input[1]);
    let sum = 0;
    let result = [];
    result[0] = 1;
    for (let i = 1;i < n;i++){
        for (let prev = i- k;prev <i - 1 ;prev++){
            if (prev >= 0) sum += prev ;
        }
        result[i] = sum;

    }
    console.log(result.join(' '));
}

kNumSeq(['6','2']);