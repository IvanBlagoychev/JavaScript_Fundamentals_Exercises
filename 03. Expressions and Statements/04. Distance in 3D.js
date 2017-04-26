function dist3D(input){
    let [x1, y1, z1, x2, y2, z2] = [input[0], input[1], input[2], input[3], input[4], input[5]];
    let d1 = Math.sqrt(((x2 - x1) *(x2 - x1))  + ((y2 - y1) * (y2 - y1))  + ((z2 - z1) * (z2 - z1)));
    console.log(d1);
}

dist3D([1, 1, 0, 5, 4, 0]);
dist3D([3.5, 0, 1, 0, 2, -1]);