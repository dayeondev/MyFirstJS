name = "Dayeon"; //string
age = 19; //int
height = 172.5; //float
is_male = true; //boolean

console.log(name, ", ", age, ", ", height, ", is male? ", is_male);


//array
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(daysOfWeek[1]);
console.log("I like ", daysOfWeek[6]);


//object
const dayeonInfo = {
    name:"Dayeon",
    age:19,
    isMale:true,
    hisTableHas:["PinkBottle", "Cup", "Books", "Dolls"],
    book:[
        {
            name:"3minDeepLearningWithTF",
            isEasy:true
        },
        {
            name:"DeepLearningFromScratch",
            isEasy:false
        }
    ]
}

console.log(dayeonInfo.age);
dayeonInfo.age = 190;
console.log(dayeonInfo.age);

console.log(dayeonInfo);


//function
function sayHello(name, age){
    console.log("hi", name, "you have", age, "years of age.");
}

sayHello("dayeon", 19);

//withString
function newSayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetDayeon = newSayHello("dayeon", 19);

console.log(greetDayeon);


const calculator = {
    plus: function(a, b){
        return a +_b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    division: function(a, b){
        return a / b;
    }
}

console.log(calculator.multiply(3, calculator.division(12, 2)));