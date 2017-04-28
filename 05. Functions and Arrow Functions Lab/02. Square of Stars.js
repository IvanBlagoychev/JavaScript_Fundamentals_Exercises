function rows(input) {
    let num = Number(input[0]);
    function cols(count) { console.log('* '.repeat(count)); }
    for (let i = 0;i < num;i++){ cols(num); }
}
rows(['5']);