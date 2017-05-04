function StoreCatalogue(input) {
    let result = new Map;
    for(let line of input){
        //let content = line.split(' : ');
        let [product, price] = line.split(' : ');
        let getFirstLetter = product[0].toUpperCase();
        if (!result.has(getFirstLetter)){
            result.set(getFirstLetter, []);
        }
        result.get(getFirstLetter).push({title: product, price: price});
    }

    function customComparator(productA, productB) {
        return productA.title.toLowerCase().localeCompare(productB.title.toLowerCase());
    }

    let sortedCategories = [...result.keys()].sort();
    for (let category of sortedCategories) {
        console.log(category);
        let products = result.get(category).sort(customComparator);
        products.forEach(p => console.log(`  ${p.title}: ${p.price}`));
    }
}

StoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);