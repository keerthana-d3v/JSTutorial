//Arrays in JS



marks = [99, 96, 34, 76, 58, 63, 82];


//Arrays are muttable 

marks[2] = 39;

console.log(marks);


bts = ["rm", "jin", "suga", "jhope", "jimin", "v", "jk"];


for (let i = 0; i <= bts.length - 1; i++) {

    console.log(bts[i]);


}

//OR

// for (let member of bts) {

//     console.log("member =", member.toUpperCase());
// }



//Practice Question

marks1 = [85, 97, 44, 37, 76, 60];

sum = 0;
// for(let i=0;i<= marks1.length-1; i++) {


//     sum = sum + marks1[i];

//     }


//     console.log(sum);

// avg= sum/marks.length;

// console.log("The average of the class is:", avg);



//OR

for (let val of marks1) {
    sum += val;
}
console.log(sum);

avg = sum / marks.length;

console.log("The average of the class is:", avg);


//Practice Question 2


prices = [250, 645, 300, 900, 50];

let i = 0;
for (let i = 0; i <= prices.length - 1; i++) {
    console.log(`Value at index ${i}: ${prices[i]}`);
    prices[i] *= 0.9;
    console.log(`Value at index ${i} after offer : ${prices[i]}`);
    i++;


}

console.log(prices);


// Array Methods


let foodItems = ['potato', 'apple', 'litchi', 'tomato'];

foodItems.push("chips"); //add value to the end mu
console.log(foodItems);

foodItems.pop();
console.log(foodItems); //remove the end value mu

let items = foodItems.toString();
console.log(items); // new string with all array elements imu
console.log(foodItems); // the original array remains the same 


//Array Methods 2

let marvelHeroes = ["ironman", "hulk", "captain america", "black widow", "spiderman", "thor"];

let dcHeroes = ["superman", "batman", "wonder woman"];
let xmenHeroes = ["professor x", "magento", "wolverine"];

let heroes = marvelHeroes.concat(dcHeroes, xmenHeroes);

console.log(heroes); //new array with concatenated arrays

marvelHeroes.unshift("dr strange");
console.log(marvelHeroes);  //add value to the start mu

let val = marvelHeroes.shift(); //remove value from the start and returns mu
console.log("deleted:", val);
console.log(marvelHeroes);


//Array Methods 3


marvelHeroes.push("dr strange", "antman", "wanda");

console.log(marvelHeroes);

let updatedHeroes = marvelHeroes.slice(1, 8); // returns a piece of the array
console.log(marvelHeroes); //no changes to the original array


console.log(updatedHeroes); //new sliced array

/* splice() method changes the original array
it is used to add, delete and replace array elements


syntax: splice(startIdx,delCount,newEl)
*/



let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2,2, 101, 102);

console.log(arr);

//Add Elements
// arr.splice(2,0, 101, 102); // delCount is 0 so only new elements are added
// console.log(arr);


//Delete Elements
// arr.splice(3,2); // delCount is 2 so 2 elements from the 3rd index get deleted
// console.log(arr);


//Replace Elements
// arr.splice(3,1,101); // delCount is 1 so 1 elements from the 3rd index get deleted
// console.log(arr);    //and 101 gets added to the 3rd index spot




// let v= arr.splice(4); //when delCount is not mentioned it deleted
//                        //all the elements after the given index and returns the 
// console.log(arr);      //deleted elements

// console.log(v); 



// Practice Question
let companies = ["bloomberg", "mircrosoft", "uber", "google", "ibm", "netflix"];


//A

// companies.splice(0,1);
// console.log(companies); 


//B

// companies.splice(2,1,"ola");
// console.log(companies); 


// C

companies.push("amazon");
console.log(companies);





//Functions in JS


function myFunction() {

    console.log("W're learning JS");

}


myFunction();




function myFunction(msg) { // msg=parameter

    console.log("W're learning JS");

}


myFunction("Hello World!"); //argument




//Function to calculate sum of 2 numbers

function sumOf(n, m) {

    //function params are local variables of function and have block scope
    return n + m;
}

//Arrow Function to Calculate the sum

const arrowSum = (a, b) => {

    console.log(a + b);


};



//Multiplication function
function mul(x, y) {

    return x * y;

}


//Arrow Fn multiplication function
const arrowMul = (a, b) => {


    console.log(a * b);


};



//Problem Question

function countVowels(str) {

    count = 0;
    for (let char of str) {

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            count++;
        }

    }

    return count;
}

let numVowels = countVowels("kiara");
console.log(numVowels);



const countVow = (str) => {
    count = 0;
    for (let char of str) {

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            count++;
        }

    }

    return count;
};



//forEach loop Method in Arrays







//can only be used for arrays
//When a function joins a data strcture or object  then it becomes a method

let arr2= ["pune","mumbai","delhi"];


arr2.forEach(function printVal(val){ // forEach() array method loops through any array, 
                                      //executing a provided function once for each array
                                      // element in ascending index order

console.log(val);

}); //



arr2.forEach((val,idx,arr2)=>{  //the value, index no and entire array can be used as parameters in the callback function

console.log(val.toUpperCase(),idx,arr2);

});



//Practice Question

let arr3=[1,2,3,4,5,6];


arr3.forEach((val)=>{

console.log(val**=2)

});

//OR OTHER WAY

// let calSquare= (val)=>{

//     console.log(val**2)
    
//     };

// arr3.forEach(calSquare);


//Map method in Arrays


/*Map is similar to forEach but returns a new array with the results of the operation

the value it callbacks return is used to form a new array

*/


let arr4=[1,2,3,4,5];


let newArr= arr4.map((val)=>{

return val*val;
});

console.log(newArr);
console.log(arr4);



//Filter method in Arrays


//give a new array of elements for a true condition or Filter


let arr5=[1,2,3,4,5,6,7,8];


let newArr1= arr5.filter((val)=>{

    return val>3;   //if this condition is true it will filter out elements
    });

    console.log(newArr1);



 //Reduce method in Arrays


/*Performs operations, reduces the array into a single value

*/

let arr6=[1,2,3,4,5,6,7,8];

const output= arr6.reduce((prev, curr) =>{
    return prev+curr;
});

console.log(output);


//highest number
let arr7=[1,2,3,4,5,6,7,8];

const output1= arr7.reduce((prev, curr) =>{
    return prev>curr ? prev:curr ;
});

console.log(output1);


//Practice Questions 1

let arr8=[88, 93, 86,97,99,76];


let newArr2= arr8.filter((val)=>{

    return val>90;   //if this condition is true it will filter out elements
    });

    console.log(newArr2);


// Practice Question 2

let arr9=[];

let numEl= prompt("Enter the number of elements:");


for(let i=1;i<=numEl; i++){

// arr9[i-1]=i;
//OR 
arr9.push(i);
    
};

console.log(arr9);


// Part A
const resultA= arr9.reduce((prev, curr) =>{
    return prev+curr;
});

console.log("sum=", resultA);

// Part B

const resultB= arr9.reduce((prev, curr) =>{
    return prev*curr;
});

console.log("factorial=", resultB);
