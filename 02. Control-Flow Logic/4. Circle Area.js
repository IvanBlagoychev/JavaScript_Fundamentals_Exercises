function circleArea(input) {
    let r  = Number(input[0]);
    let area = Math.PI * r * r;
    console.log(area + '\n' + area.toFixed(2));
}

circleArea(['5']);