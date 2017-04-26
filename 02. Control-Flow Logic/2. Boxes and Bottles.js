function boxAndBottle(input) {
    let bottles = Number(input[0]);
    let boxPlaces = Number(input[1]);
    let result = Math.ceil(bottles / boxPlaces)
    return result;
}

// console.log(boxAndBottle(['5', '10']));