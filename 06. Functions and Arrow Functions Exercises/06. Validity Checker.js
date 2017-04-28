function ValidityChecker(input) {
    let [x1, y1, x2, y2] = input.map(Number);
    let distFormula1 = Math.sqrt(Math.pow((x1 - 0), 2) + Math.pow((y1 - 0), 2));
    let distFormula2 = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));
    let distFormula3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (chekType(distFormula1)) console.log("{" + x1 +", " + y1 + "} to {0, 0} is valid");
    else console.log("{" + x1 +", " + y1 + "} to {0, 0} is invalid");
    if (chekType(distFormula2)) console.log("{" + x2 +", " + y2 + "} to {0, 0} is valid");
    else console.log("{" + x2 +", " + y2 + "} to {0, 0} is invalid");
    if (chekType(distFormula3)) console.log("{" + x2 +", " + y2 + "} to {" + x1 +", " + y1 + "} is valid");
    else console.log("{" + x2 +", " + y2 + "} to {" + x1 +", " + y1 + "} is invalid");

    function chekType(num) {
        if(num === +num && num === (num|0)){
            return true;
        }
        return false;
    }
}

ValidityChecker(['3', '0', '0', '4']);
ValidityChecker(['2','1','1','1']);