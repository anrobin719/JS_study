/*
var firstName = "john";
console.log(firstName);

var woman = false;
console.log(woman);

var firstName = "robin"
var age = "22"

console.log(`${firstName} ${age}`);

var job = "developer",
    isMarried = false;

console.log(`${firstName} is a ${age} years old ${job}. Is she marrid? ${isMarried}`);

age = "twenty two";
job = "designer";

window.alert(`${firstName} is a ${age} years old ${job}. Is she marrid? ${isMarried}`);

var lastName = prompt("What is her last Name?");
console.log(firstName+" "+lastName);
*/


/*
// Math Operators
var year, yearRobin, yearAhyoung;
year = 2019
yearRobin = year - 23;
yearAhyoung = year - 24;

console.log(yearRobin);
console.log(yearAhyoung);

var ageAhyoung = 24,
    ageRobin = 23;

// Logical Operators
var ahyoungOlder = ageAhyoung > ageRobin;
console.log(ahyoungOlder);

// Typeof Operator
console.log(typeof ahyoungOlder);
console.log(typeof ageAhyoung);
console.log(typeof "Hello Wold");
var x = "";
console.log(x);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //26
console.log(x, y);

// More operators
console.log(x);
x *= 2;
console.log(x);

x += 10;
console.log(x);

*/

/*******************************************
 * FIRST CODING CHALLENGE 1
 */

/*
// 1. Store mass and height in variables
var markMass, markHeight, jonhMass, jonhHeight;

markMass = 85;
markHeight = 1.7;
jonhMass = 78;
jonhHeight = 1.8;

// 2. Calculate both their BMIs
var markBMI = markMass / (markHeight * markHeight);
var jonhBMI = jonhMass / (jonhHeight * jonhHeight);

// 3. Create a boolean variable about 'mark has a higher BMI than john'
var compareBMI = markBMI >= jonhBMI;

//4. Print a string!
console.log(`Is mark's BMI higher than jonh's? ${compareBMI}!`);
console.log(`So, what's mark's and jonh's BMI? Mark's BMI : ${markBMI}, Jonh's BMI : ${jonhBMI}`);
*********************************************/


/*
var firstName = "jonh"
var age = 20;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30){
    console.log(firstName + " is a young man.");
} else {
    console.log(firstName + " is a man.");
}
*/


/********************************
 * The Ternary Operator and Switch Statements


var firstName = "jonh";
var age = 16;

age >= 18? console.log(firstName + " drinks beer.") : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);



var job = "teacher";
switch (job) {
    case "teacher" :
        console.log(firstName + " teaches kids how to code.");
        break; 
    case "designer" :
        console.log(firstName + " designs beautiful websites.");
        break;
    case "driver" :
        console.log(firstName + " drives an uber in Lisbon.");
        break;
    default :
        console.log(firstName + " does something else.");
}

 */



/***************************************
 * second challenge!

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (119 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log(`Jonh's team wins with ${scoreJohn} point`);
} else if(scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log(`Mike's team wins with ${scoreMike} point`);
} else if(scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log(`Mary's team wins with ${scoreMary} point`);
} else {
    console.log(`There is a draw`);
}


if (scoreJohn > scoreMike) {
    console.log(`Jonh's team wins with ${scoreJohn} point`);
} else if(scoreMike > scoreJohn) {
    console.log(`Mike's team wins with ${scoreMike} point`);
} else {
    console.log(`There is a draw`);
}
****************************************/




/**************************************
 * FUNCTION
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageRobin = calculateAge(1996);
var ageMike = calculateAge(1953);
var ageJane = calculateAge(1986);
console.log(ageRobin, ageMike, ageJane);

function yearsUntilRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}

yearsUntilRetirement(1996, "Robin");
yearsUntilRetirement(1953, "Mike");
yearsUntilRetirement(1986, "Jane");

*********************************************/

/******************************************
//object literal
var john = {
    firstName: "john",
    lastName: "Smith",
    birthYear: 1990,
    family: ["jane", "mark", "bob", "emily"],
    job: "teacher",
    isMarried: false
};

console.log(john['birthYear']);
var b = "birthYear"
console.log(john[b]);

john.job = "developer";
john.isMarried = true;
john["lastName"] = "An";
console.log(john);

//new object syntax
var jane = new Object();
jane.name = "jane";
jane.birthYear = "1989";
jane["lastName"] = "smith";
console.log(jane);
********************************************/


/*var Robin = {
    firstName: "Robin",
    lastName: "An",
    birthYear: 1996,
    family: ["jane", "mark", "bob", "emily"],
    job: "teacher",
    isMarried: false,
    clalcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

Robin.clalcAge();
console.log(Robin);
*/


/*****************************************
 * CODING CHALLENGE 4!

var Mark = {
    fullName: "mark miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var John = {
    fullName: "john smith",
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};




if(John.calcBMI() > Mark.calcBMI()) {
    console.log(John.fullName + ' has a higher BMI of ' + John.bmi);
} else if (John.bmi < Mark.bmi){
    console.log(Mark.fullName + ' has a higher BMI of ' + Mark.bmi);
} else {
    console.log('they have the same BMI');
}
*******************************************/

//LOOPS AND ITERATION
/*********************************************
//FOR LOOP
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false,  exit the loop!

var john = ["john", "Smith", 1990, "designer", false];
//INSTEAD OF 
//console.log(john[0]);
//console.log(john[1]);
//console.log(john[2]);
//console.log(john[3]);
//console.log(john[4]);
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//WHILE LOOP
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*******************************************/

/************** continue and break statements
var john = ["john", "Smith", 1990, "designer", false, "blue"];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") break;
    console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

 */


/*************************************************
 * CODING CHALLENGE 5
 ************************************************/




var john = {
    fullName: "john smith",
    bills : [124, 48, 268, 180, 42],
    calcTips : function() {
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            var percent;
            var bill = this.bills[i]
            if(bill < 50) {
                percent = 0.2;
                } else if(bill >= 50 && bill < 200) {
                percent = 0.15;
                } else{
                percent = 0.1;
            }
            this.tips[i] = percent * bill;
            this.finalValues[i] = percent * bill + bill;
        }
    }
}

var mark = {
    fullName: "mark miller",
    bills : [77, 475, 110, 45],
    calcTips : function() {
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            var percent;
            var bill = this.bills[i]
            if(bill < 100) {
                percent = 0.2;
                } else if(bill >= 100 && bill < 300) {
                percent = 0.1;
                } else{
                percent = 0.25;
            }
            this.tips[i] = percent * bill;
            this.finalValues[i] = percent * bill + bill;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();
console.log(john, mark); 

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
  
if(john.average > mark.average) {
    console.log(`${john.fullName}'s family pays higher tips, with an average of $${john.average}`);
} else if(mark.average > john.average) {
    console.log(`${mark.fullName}'s family pays higher tips, with an average of $${mark.average}`);
}
  
  
  
  
  
  
  
  
  
  
  
 