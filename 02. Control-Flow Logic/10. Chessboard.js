function chess(input) {
    let num = Number(input[0]);
    console.log('<div class="chessboard">');
    for(let i = 1; i <= num; i++) {
        console.log("  " + "<div>");
        if (i % 2 == 0){
            for(let j = 0; j < num; j++) {
                if (j % 2 == 0)
                    console.log("    " + '<span class="white"></span>');
                else {
                    console.log("    " + '<span class="black"></span>');
                }
            }
        }
        else {
            for (let j = 0; j < num; j++) {
                if (j % 2 == 0)
                    console.log("    " + '<span class="black"></span>');
                else
                    console.log("    " + '<span class="white"></span>');
            }
        }
        console.log("  " + "</div>");
    }
    console.log("</div>");
}

chess(['3']);