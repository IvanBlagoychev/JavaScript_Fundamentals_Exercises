function color(input) {
    let num = Number(input[0]);
    let str = "<ul>" + '\n\r';

    for(let i = 1; i <= num; i++){
        if (i % 2 == 0){
           str += "  <li><span style='color:blue'>" + i + "</span></li>" + '\n\r';
        }
        else{
            str +="  <li><span style='color:green'>" + i + "</span></li>" + '\n\r';
        }
    }
    console.log(str + "<ul>");
}
color(['11']);