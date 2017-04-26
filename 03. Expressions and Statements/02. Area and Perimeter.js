function areaAndPerimeter(input) {
    // let w = Number(input[0]);
    // let h = Number(input[1]);
    let [w,h] = [input[0], input[1]].map(Number);
    let area = w * h;
    let perimeter = 2*(w + h);
    console.log(area + '\n' + perimeter);
}

areaAndPerimeter(['2', '2']);
areaAndPerimeter(['1', '3']);
areaAndPerimeter(['2.5', '3.14']);