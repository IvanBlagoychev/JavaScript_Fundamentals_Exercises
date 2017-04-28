function smallestTwo(input) {
    let SmallestNum = input.map(Number).sort((a,b) => a-b);
    console.log(SmallestNum.slice(0,2).join(' '));
}

smallestTwo(['3','0','10','4','7','3']);