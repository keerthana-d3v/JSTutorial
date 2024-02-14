// Data Types, Variables & Objects(Non Primitive Data Type)



const profile = {

    name: "Keerthana Panyam",
    age: 22,
    isFollow: false,
    followers: 502,
    following: 1000



};

/* Object is a collection of values of primitive data types.
 Data is stored in an object as key:value pairs

 Object is muttable and values can be changed.
*/

profile["name"] = "Kiara Panyam";



console.log(profile["name"]);
/* Can also be written as:

console.log( profile["name"]);
*/


console.log(typeof profile);


//Artimetic Operators
let a = 5;

let b = 2;

console.log("a = ", a, "& b= ", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); //Modulus
console.log("a ** b =", a ** b); // Exponentiation a^b

//Unary Operator



// console.log("a++ =", a++);
// console.log("++a =", ++a); //Increment
// console.log("a =", a);


// console.log("b-- =", b--); //Decrement
// console.log("b =", b);


//Assignment Operators


// let c=5;
// let d=2;

// c +=4; //c= c+4
// c -=4; // c= c-4
// c *=4; // c= c*4
// c /=4; // c= c/4
// c %=4; //c=c%4
// c **=4; // c= c**4




// console.log("c =",c);


//Comparison Operators

let c = 5;
let d = 2;
let e = "5";


console.log("c = ", a, "& d= ", d, "e= ", e);
console.log("c==b:", c == b); //Equal to
console.log("c!=b:", c !== b); // Not equal to 
console.log("c==e:", c == e);  // string value if only number is read as umber
console.log("c===e:", c === e); //equal to & type
console.log("c!==e:", c !== e); // not equal to & type


console.log("5>2", c > d);
console.log("5<2", c < d);
console.log("5>=2", c >= d);
console.log("5<=2", c <= d);


// Logical Operators

let cond1 = c > d;
// let cond2 = c === 5;
let cond2 = c === 4;

console.log("cond1 && cond2 =", cond1 && cond2);


console.log("cond1 || cond2 =", cond1 || cond2);

console.log("!(cond2)=", !(cond2));



//Conditional Statements

// let mode = "dark";
// let color;


// if (mode === "dark") {
//     color = "black";
// }


// if (mode === "light") {


//     color = "white";
// }

// console.log("background color:", color);

// ////
let num = 9;

if (num % 2 === 0) {
    console.log(num, "is even");

} else {
    console.log(num, "is odd");

}

////
let mode = "dark";
let color;


if (mode === "dark") {
    color = "black";
}


else if (mode === "blue") {


    color = "blue";
}

else if (mode === "pink") {


    color = "pink";
}

else {


    color = "white";
}





console.log("background color:", color);


//Ternary Operators

let age = 16;

let result = age >= 18 ? "adult" : "not an adult"; // condition? true output : false output 

console.log(result);

// Switch statements


const expr = 'Apples';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
        console.log('Mangoes are $0.79 a pound.');
        break;
    case 'Papayas':
        console.log('Papayas are $2.79 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// Practice Question 1 


// let n= prompt("Enter a number:");


// if (n %5 ===0) {

// console.log(n, "is a multiple of 5.")

// }

// else {

//     console.log(n, "is NOT a multiple of 5.")

// }

// Practice Question 2

// let score = prompt("Enter your score(0-100):");
// let grade;

// if (score <= 100 && score >= 80) {

//     grade = "A";

// }


// else if (score <= 79 && score >= 70) {

//     grade = "B";

// }

// else if (score <= 69 && score >= 60) {

//     grade = "C";

// }
// else if (score <= 59 && score >= 50) {

//     grade = "D";

// }

// else {

//     grade = "F";

// }



// console.log("accoring to your score your grade is:", grade);


//  Loops in JS


//FOR
//Print 5 times
// for (let i=1;i<=5;i++){


// console.log("Hi, this is Keerthana");

// };




//Calculate sum of 1 to 100

sum = 0;
n = 100;
for (let i = 1; i <= n; i++) {

    sum = sum + i;

    // console.log(sum);
};

console.log("loop has ended");
console.log("sum", sum);


//WHILE


// i=1; //inititalize before loop
//  while(i<=5){  //stopping statement

//     console.log("Hi, this is Kiara");
//     i++  //update within loop
//  }



// DO-WHILE

let i = 1;
do {

    console.log("Hi, this is KP");
    i++;

} while (i <= 5);


//FOR-OF arrays and strings

let str = "Javascript";

let size = 0;
for (let i of str) {



    console.log("i=", i);
    size++;
}
console.log("string size =", size);


// FOR-IN objects


let student = {
    name: "Keerthana Panyam",
    age: 22,
    cgpa: 7.5,
    isPass: true,


};



for (let key in student) {


    console.log("key=", key, "value=", student[key]);

}

// Practice Question 1


for (let k = 0; k <= 100; k++) {



if (k % 2 === 0) {
        console.log(k);
    }

}


// Practice Question 2


// let gameNum=34;
// let guessNum
// do {

//  guessNum= prompt("Enter a number")

// } while (guessNum!=gameNum);

// console.log("Congratulations! You've entered the right number!");






// String in JS


let str1= "Javascript";
let str2= "JS";

console.log(str1.length);
console.log(str1[1]);



//Template Literals

let specialString = `This is a template literal`
console.log(typeof specialString);


let obj= {

    item: "pen",
    price: 2,

};
 console.log("the price of this", obj.item, "is", obj.price, "dollars." );


 //This can be simpliefied by using Template Literals


 let object=`The price of this ${obj.item} is ${obj.price} dollars.`;
 
 
 /*Template literal make a single string out of individual the data types
  like price(int).

this is called String Interpolation


It is used to embed expressions using placeholders which are substituted with
values during runtime.
*/


console.log(object);

// Escape Characters


let str3="Keerthana\nPanyam"; //16 characters
let str4="Keerthana\tPanyam"; //16 characters
let str5="   Keerthana   Panyam   JS     ";


console.log(str3.toUpperCase()); //makes upper case
console.log(str3.toLowerCase()); // makes lower case
console.log(str5.trim()); //removes white cases at the front and back of the string 


/* Mehtods on string like _.toUpperCase(), _.toLowerCase(), _.length  no not change/update the 
original string because 
Strings are immutable */

console.log(str3.slice(0,9)); // returns a part of string

let g=str3.concat(str4);// concatenates 2 str3 with str 4
console.log(g); // concatenates 2 str3 with str 4

console.log(str3.replace("Keerthana","Kiara")); // searches and replaces 1st matching part of string

console.log(g.replaceAll("Keerthana","Kiara")); //searches and replaces ALL matching part of string

console.log(str3.charAt(0)); // searches character at given index

//Problem Questions 1


let str6=prompt('Enter your full name with no spaces:');


let length= str6.length;
let lowercase= str6.toLowerCase();

// let username=`@${lowercase}${length}`;
let username= "@"+ lowercase+length;
console.log(username);
