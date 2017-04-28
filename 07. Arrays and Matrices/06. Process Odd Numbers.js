function oddNum(input) {
    input = input.map(Number);
    let filtered = input.filter((x, i) => i % 2 == 1).map(x=> x* 2).reverse();
    console.log(filtered.join(' '));
}
oddNum(['10','15','20','25']);