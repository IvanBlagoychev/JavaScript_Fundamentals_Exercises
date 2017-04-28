function extractUsernames(input) {
    let result = [];
    for(let email of input){
        email = email.split('@');
        let username = email[0] + '.';
        let domain = email[1];
        let domainParts = domain.split('.');
        domainParts.forEach(p=>username +=p[0]);
        result.push(username);
    }
    console.log(result.join(', '));
}
extractUsernames(['pesho@gmail.com', 'tod_or@mail.dir.bg']);
