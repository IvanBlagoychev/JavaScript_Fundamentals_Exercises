function sumVatTotal(input) {
    let sum = 0;
    for (let num of input) {
        sum += Number(num);
    }
    let vat = sum * 0.20;
    let total = (sum + vat);
    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + sum * 1.20);
}
sumVatTotal(['99.9999','99.9999','99.9999','99.9999','99.9999','99.9999','99.9999','99.9999']);