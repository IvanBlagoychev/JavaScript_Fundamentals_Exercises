function movies(input) {
    let movie = input[0].toLowerCase();
    let day = input[1];
    let dayOfTheWeek = day.toLowerCase();
    if (movie === "the godfather"){
        switch (dayOfTheWeek){
            case "monday":return 12;break;
            case "tuesday":return 10;break;
            case "wednesday":return 15;break;
            case "thursday":return 12.50;break;
            case "friday":return 15;break;
            case "saturday":return 25;break;
            case "sunday":return 30;break;
            default:return "error" ;break;
        }
    }
    else if (movie === "schindler's list"){
        switch (dayOfTheWeek){
            case"monday":return "8.50";break;
            case "tuesday":return 8.50;break;
            case "wednesday":return 8.50;break;
            case "thursday":return 8.50;break;
            case "friday":return 8.50;break;
            case "saturday":return 15;break;
            case "sunday":return 15;break;
            default:return "error" ;break;
        }
    }
    else if (movie === "casablanca"){
        switch (dayOfTheWeek){
            case"monday":return 8;break;
            case "tuesday":return 8;break;
            case "wednesday":return 8;break;
            case "thursday":return 8;break;
            case "friday":return 8;break;
            case "saturday":return 10;break;
            case "sunday":return 10;break;
            default:return "error" ;break;
        }
    }
    else if (movie === "the wizard of oz"){
        switch (dayOfTheWeek){
            case"monday":return 10;break;
            case "tuesday":return 10;break;
            case "wednesday":return 10;break;
            case "thursday":return 10;break;
            case "friday":return 10;break;
            case "saturday":return 15;break;
            case "sunday":return 15;break;
            default:return "error" ;break;
        }
    }
    else return "error";
}

console.log(movies(['The Godfather','Friday']));
console.log(movies(['casablanca','sunday']));
console.log(movies(["Schindler's LIST","monday"]));
console.log(movies(['SoftUni','Nineday']));