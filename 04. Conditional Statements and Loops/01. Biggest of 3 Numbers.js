function biggest(input) {
    let [num1, num2, num3] = [input[0], input[1], input[2]];
    let max = Math.max(num1,Math.max(num2,num3));
    console.log(max);
}
biggest([-10,-20,-30]);
biggest([130, 5, 99]);
biggest([43, 43.2, 43.1]);