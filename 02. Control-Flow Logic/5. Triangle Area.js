function triangleArea(input) {
    let [a,b,c] = [input[0], input[1], input[2]].map(Number);
    let s = (a + b + c) / 2;
    let hiron = Math.sqrt(s * (s-a)*(s - b)*(s - c));
    console.log(hiron);
}
triangleArea(['2', '3.5', '4']);

