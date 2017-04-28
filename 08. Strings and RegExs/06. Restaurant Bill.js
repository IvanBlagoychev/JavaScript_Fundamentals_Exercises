function bill(input) {
    let products = input.filter((x, i) => i % 2 == 0);
    let totalSum = input.filter((x,i) => i % 2 == 1).map(Number).reduce((a,b) => a+b);
    console.log(`You purchased ${products.join(', ')} for a total sum of ${totalSum}`);
}
bill(['Cola','1.35', 'Pancakes', '2.88']);
bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);