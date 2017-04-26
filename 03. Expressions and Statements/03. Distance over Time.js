function speed(input) {
    let [v1, v2, t] = [input[0], input[1], input[2]].map(Number);
    let s1 = (v1 * (t/60)) / 60 * 1000;
    let s2 = (v2 * (t/60)) / 60 * 1000;
    let dist = Math.abs(s1 - s2);
    console.log(dist);
}

speed([5, -5, 40]);
speed([0, 60, 3600]);
speed([11, 10, 120]);