function units(input) {
    let inches = input[0];
    let feets = Math.floor(inches / 12);
    let leftover = inches % 12;
    if (leftover == 0)
        console.log(feets + "'" + "-" + 0 + '"');
    else
        console.log(feets + "'" + "-" + leftover + '"');
}
units([36]);