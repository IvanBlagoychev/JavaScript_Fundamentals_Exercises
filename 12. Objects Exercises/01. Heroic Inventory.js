function heroic(input) {
    let result = [];
    for(let line of input){
        let [name, level, items] = line.split(' / ');
        let obj = {"name":name, "level":level, "items": Array.from(items.split(','))};
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
heroic(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

heroic(['Jake / 1000 / Gauss, HolidayGrenade']);