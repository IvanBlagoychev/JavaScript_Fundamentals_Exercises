function arrayStep(input) {
    let step = Number(input[input.length - 1]);
    input.pop();
    for (let i = 0;i < input.length;i+=step){
        console.log(input[i]);
    }
}
arrayStep(['5','20','31','4','20','2']);
arrayStep(['dsa','asd','test','tset','2']);