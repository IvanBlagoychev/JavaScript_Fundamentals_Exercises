function round(input) {
    let num = input[0];
    let rounder = input[1];
    return Math.round(num * Math.pow(10, rounder)) / Math.pow(10, rounder);
}
console.log(round([10.5, 3]));