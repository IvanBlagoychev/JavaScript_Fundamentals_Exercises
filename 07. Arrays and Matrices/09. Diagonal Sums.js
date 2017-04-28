function diagonal(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let leftSum = 0, rightSum = 0;
    for (let row = 0;row < matrix.length;row++){
        leftSum += matrix[row][row];
        rightSum += matrix[row][matrix.length - row - 1];
    }
    console.log(leftSum + ' ' + rightSum);
}
diagonal(['20 40', '10 60']);
diagonal(['3 5 17','-1 7 14','1 -8 89']);