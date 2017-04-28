function validateEmail(input) {
    let pattern = /^[a-zA-Z0-9\]+\@[a-z]+(\.[a-z]+)+$/g;
    let validity = pattern.test(input);
    if (validity) console.log("Valid");
    else console.log("Invalid");
}

validateEmail(['bai.ivan@mail.sf.net']);
validateEmail(['valid@email.bg']);
validateEmail(['invalid@emai1.bg']);
