

// question: write a function that takes marks as input and returns the grade based on the following criteria:


function grade(marks){
    if(marks>=80){
        return 'O+';
    }
    else if(marks>=60){
        return 'A+';
    }
    else if(marks>=40){
        return 'B+';
    }
    else if(marks>=20){
        return 'C+';
    }
    else{
        return 'F+';
    }
}
console.log(grade(85)); // O+
console.log(grade(75)); // A+
console.log(grade(45)); // B+
console.log(grade(30)); // C+
console.log(grade(10)); // F+
console.log(grade('sam')); // F+, because the string 'sam' is not a number, and when compared to a number, it results in false, so the function returns 'F+' as the default case
console.log(grade(true)); // F+, because the boolean value true is not a number, and when compared to a number, it results in false, so the function returns 'F+' as the default case
console.log(grade(1000)); // O+

