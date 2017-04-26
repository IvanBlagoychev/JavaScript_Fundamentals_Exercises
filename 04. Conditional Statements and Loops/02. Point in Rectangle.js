function point(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax)
        console.log("inside");
    else
        console.log("outside");
}
point(['8','-1','2','12','-3','3']);
point(['12','1','2','12','-3','3']);