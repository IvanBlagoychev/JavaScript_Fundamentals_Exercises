function triangle(input) {
    let num = Number(input[0]);
    function stars(count) {
        console.log('*'.repeat(count));
    }
    for (let i = 1;i <= num;i++){ stars(i);}
    for (let i = num - 1;i > 0;i--){stars(i);}
}

triangle(['5']);