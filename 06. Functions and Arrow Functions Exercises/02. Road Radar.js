function radar(input) {
    let speed = Number(input[0]);
    let areaDriving = input[1];
    if (separateLimits(areaDriving) >= speed)
        console.log();
    else{
        if (speed >= separateLimits(areaDriving) && speed <= separateLimits(areaDriving) + 20)
            console.log("speeding");
        else if (speed >= separateLimits(areaDriving) + 21 && speed <= separateLimits(areaDriving) + 40)
            console.log("excessive speeding");
        else if (speed >= separateLimits(areaDriving) + 41)
            console.log("reckless driving");

    }
    function separateLimits(zone) {
        switch(zone){
            case "motorway":return 130 ;break;
            case "interstate":return 90 ;break;
            case "city":return 50 ;break;
            case "residential":return 20 ;break;
            default:break;
        }
    }
}
radar(['21', 'residential']);
radar(['120', 'interstate']);
radar(['200', 'motorway']);
radar(['200', 'motorway']);
radar(['40','city']);
