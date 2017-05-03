function score(input) {
    let html = `<table>\n`;
    html += `  <tr><th>name</th><th>score</th>\n`;
    let arr = JSON.parse(input);
    for(let line of arr){
        html += `  <tr><td>${htmlEscape(line.name)}</td><td>${htmlEscape(line.score)}</td></tr>\n`;
    }
    html += `</table>`;
    console.log(html);

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
score(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);