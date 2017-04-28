function firstAndLast(arr) {
    arr = arr.map(Number);
    let k = arr.shift();
    console.log(arr.slice(0,k).join(' '));
    console.log(arr.slice(arr.length - k, arr.length).join(' '));
}
firstAndLast(['3','6', '7', '8', '9']);
firstAndLast(['2','7','8','9']);