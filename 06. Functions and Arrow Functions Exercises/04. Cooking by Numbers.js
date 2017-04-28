function result(input) {
  let num = Number(input[0]);
    let operation;
    for (let i = 1;i < input.length;i++){
        operation = input[i];
        console.log(PerformOperation(num, operation));
        num = PerformOperation(num, operation);
    }

    function PerformOperation (num, operation) {
        switch(operation){
            case 'chop': return num / 2 ;break;
            case 'dice': return Math.sqrt(num); break;
            case 'spice': return num + 1;break;
            case 'bake': return num * 3; break;
            case 'fillet': return num - (num * 0.20); break;
            default:break;
        }
    }
}
result(['32','chop','chop','chop','chop','chop']);
result(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);