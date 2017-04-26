function figure(input) {
    let n = Number(input[0]);
    let string = '';
    if (n == 1){
        console.log('+');
    }
        else if (n == 2){
        console.log('+++');
    }
    else if (n % 2 == 0 && n > 3){
        for (let col = 0;col < n -1 ;col++){
            string = '-';
            if (col == 0 || col == n/2 -1 || col == n-2){
                string = '+';
                for (let i = 0;i < n*2-4;i++) {
                    if (i == n -2)
                    {
                        string += '+';
                    }
                    string += '-';
                }
                string += '+';
            }
            else{
                string = '|';
                for (let i = 0;i < n*2-4;i++) {
                    if (i == n -2)
                    {
                        string += '|';
                    }
                    string += ' ';
                }
                string += '|';
            }
            console.log(string);
        }
    }
    else if (n % 2 == 1 && n != 1)
    {
        for (let col = 0;col < n ;col++){
            string = '-';
            if (col == 0 || col == n-1 || col == Math.ceil(n/2 - 1)){
                string = '+';
                for (let i = 0;i < n*2-4;i++) {
                    if (i == n -2)
                    {
                        string += '+';
                    }
                    string += '-';
                }
                string += '+';
            }
            else{
                string = '|';
                for (let i = 0;i < n*2-4;i++) {
                    if (i == n -2)
                    {
                        string += '|';
                    }
                    string += ' ';
                }
                string += '|';
            }
            console.log(string);
        }
    }
}
figure([5]);