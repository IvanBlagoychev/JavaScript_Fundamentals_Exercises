function extractLinks(input) {
    let match, result = [];
    let regEx =/www\.[A-Za-z0-9\-]+\.[a-z]+(\.[a-z]+)*/g;
    for(let line of input){
        while(match = regEx.exec(line)){
            result.push(match[0]);
        }
    }

    console.log(result.join('\n'));
}

extractLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]);