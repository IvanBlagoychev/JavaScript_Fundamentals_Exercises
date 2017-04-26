function age(input) {
    let ageLimiter = Number(input[0]);
   for (let i = 2;i < input.length;i+=2 ){
       if (input[i] >= ageLimiter){
           console.log("{ name: " + "'" + input[i - 1] + "'" + ", " + "age: " + input[i] + " }");
       }
   }
}

// age(['12', 'Ivan', '15', 'Asen', '9']);