function JStable(input) {
    let html = `<table>\n`;
    for(let line of input){
        html += `   <tr>\n`;
        let parsed = JSON.parse(line);
        //console.log(parsed);
        for( let key of Object.keys(parsed)){
            html += `       <td>${parsed[key]}</td>>\n`
        }
        html += `   </tr>\n`;
    }
    html += `</table>`;
    console.log(html);
}

JStable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);
