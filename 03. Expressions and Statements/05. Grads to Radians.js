function gradsToDegrees([grads]) {
    grads = grads % 400;
    if (grads < 0){
        grads += 400;
    }
    let degrees = grads * 0.9;
    console.log(degrees)
}

gradsToDegrees([850]);gradsToDegrees([100]);gradsToDegrees([400]);gradsToDegrees([-50]);