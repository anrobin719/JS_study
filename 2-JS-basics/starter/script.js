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


/*****************************
 *  CODING CHALLENGE 1
var johnMass = 92;
var johnHeight = 1.95;

var markMass = 78;
var markHeight = 1.69;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

var markHigher = markBMI > johnBMI;
console.log(`Mark BMI is higher than John BMI with ${markBMI}? ${markHigher}.`);
*/

/*
var johnMass = 92;
var johnHeight = 1.95;

var markMass = 78;
var markHeight = 1.69;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

if(johnBMI > markBMI) {
    console.log(`John's BMI is highter than Mark's`);
}else {
    console.log(`Mark's BMI it higher than John's`);
}

*/


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

/*****************************
* The Ternary Operator and Switch Statements

var firstName = "Robin";
var age = 24;

age >= 18 ? console.log(`${firstName} can drinks beer`) : console.log(`${firstName} have to drink juice`);

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);




var job = "designer";
switch(job) {
    case "teacher" :
        console.log(firstName + ' teaches math to kids.');
        break;
    case "designer" :
        console.log(firstName + ' makes world better!');
        break;
    case "developer" :
        console.log(firstName + ' creates many efficient things.');
        break;
    default :
        console.log(firstName + ' dose something else.');
}

age = 23;
switch(true) {
    case age < 13 :
        console.log(firstName + ' is a elementry school student');
        break;
    case age >= 13 && age < 20 :
        console.log(firstName + ' is a young human.');
        break;
    case age >= 20 :
        console.log(firstName + ' can drink beer again!');
        break;
    default :
        console.log(firstName + ' is a human.');
}

*/

/*

var johnScore = [89, 120, 103];
var mikeScore = [116, 94, 123];
var maryScore = [97, 134, 105];

function calcAverage(score) {
    (score[0] + score[1] + score[2]) / 3;
}

johnAverage = calcAverage(johnScore);
markAverage = calcAverage(mikeScore);
maryAverage = calcAverage(maryScore);

console.log(johnAverage, markAverage, maryAverage);

if(johnAverage > markAverage && johnAverage > maryAverage) {
    console.log(`John's is the winner with ${johnAverage}`);
} else if(markAverage > johnAverage && markAverage > maryAverage) {
    console.log(`Mark's is the winner with ${markAverage}`);
} else if(maryAverage > markAverage && maryAverage > johnAverage) {
    console.log(`Mary's is the winner with ${maryAverage}`);
} else {
    console.log(`There're draws.`);
}


*/



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


/*******************************************
 * THIRD CODING CHALLENGE!
 * 
var bills = [124, 48, 268];

function calcTips(bill) {
    var percent;
    if(bill < 50) {
        percent = .2;
    } else if(bill >= 50 && bill < 200) {
        percent = .15;
    } else {
        percent = .1;
    }
    return bill * percent;
}

tips = [calcTips(bills[0]),
        calcTips(bills[1]),
        calcTips(bills[2])];

totalBills = [bills[0]+tips[0],
            bills[1]+tips[1],
            bills[2]+tips[2],];

console.log(bills, tips, totalBills);
*/

/*
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(typeof john[0]);

console.log(john.indexOf('designer'));
*/

/*************************************
 * CODING CHALLENGE 3!
 

var bills = [124, 48, 268];

function calcTips(bill) {
    var percent;
    if(bill < 50) {
        percent = .2;
    } else if(bill >= 50 && bill < 200) {
        percent = .15;
    } else {
        percent = .1;
    }
    return bill * percent;
}

var tips = [calcTips(bills[0]),
            calcTips(bills[1]),
            calcTips(bills[2])];
var finalBills = [tips[0] + bills[0],
                    tips[1] + bills[1],
                    tips[2] + bills[2]];

console.log(tips, finalBills);


*************************/

/*
var robin = new Object();
robin.firstName = "Robin";
robin.lastName = "An";
robin.age = 23;
robin["job"] = "developer";

console.log(robin["lastName"]);

var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/


/*************************************
 * CODING CHALLENGE 4!
 * 
var john = {
    fullName: "John Smith",
    mass: 67,
    height: 1.7,
    calcBmi : function() {
        this.BMI = this.mass / (this.height * this.height);
    }
}

var mark = {
    fullName: "Mark Smith",
    mass: 76,
    height: 1.8,
    calcBmi : function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}



if(john.calcBmi() > mark.calcBmi()) {
    console.log(`${john.fullName} has the highest BMI with ${john.BMI}`);
} else if(john.BMI < mark.BMI) {
    console.log(`${mark.fullName} has the highest BMI with ${mark.BMI}`);
} else {
    console.log(`They have same BMI! :)`);
}

************************************/




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


/*******

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
  
  
  
  
   */
  
  
  
  
  
  
 