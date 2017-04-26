function figure([x1,y1,x2,y2]) {
    let [num1,num2,num3] = [x1*y1, x2 * y2, Math.min(x1,x2) * Math.min(y1,y2)];
    console.log(num1 + num2 - num3);
}

figure(['2', '4', '5', '3']);