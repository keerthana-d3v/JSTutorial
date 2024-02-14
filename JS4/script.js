
const student = {
    fullName:"Keerthana Panyam",
    marks: 93.2,
    printMarks: function() {

        console.log("marks =", this.marks); //this is used inside an object to specifty the obj name ie student.marks
    }


};

//Prototypes in JS

/*prototype is a reference to an object. It can be used in an
 object to carry out methods from another object*/

 /*if prototype and object have the same method the objects method
 will be considered*/

 //Classes in Objects

  /*it is a program code template for bulding an object*/


class toyotaCars{
constructor(brand, mileage){


    console.log("create a new car");
    this.brand=brand;
    this.mileage =mileage;
}
    start(){

        console.log("start");       //define class and methods/functions inside it
    }
     stop(){

    console.log("stop");

     }

//      setBrand(brand){               //template for defining variable in object

//         this.brand=brand;        //this.brand is the properly of the objects being made from this class. the RHS brand is the argument/parameter of the function

// }

};

let fortuner= new toyotaCars("fortuner",10); //objects created using class template
// fortuner.setBrand("fortuner");

console.log(fortuner)
let lexus= new toyotaCars("lexus",12);
console.log(lexus)




//Constructor 



//if a class doesn't have a constructor method in their class then is is automatically invoked


//constructors are used for initializing new objects




//Inheritance in JS



class Parent{
constructor(name){

this.species="homo spaiens";
this.name=name;



}
hello(){

console.log("hello");

}

eat(){


    console.log("eat dinner");
}



}


class Child extends Parent{

constructor(name, age){
super(name);  //invoking parent constructor
this.age=age; //gives an error and need to invoke parent constructor first ebfore using this



}





    eat(){        //if child and parent have same method  child's method is used
                   //this is called Method Overriding


        console.log("eat baby food");
    }
    
    

}

let obj=new Child("keerthana",8);



//Practice Questions 1

let DATA="secret information";
class User{

constructor(name,email){

    this.name=name;
    this.email=email;

}
viewData(){

console.log("data=", DATA);

}
}




class Admin extends User{
constructor(name,email){
super(name,email);


}

    editData(){
    
    DATA="some new value";
    
    }
    
    
    
    };

let student1 = new User ("shradha", "abc@email. com");
let student2 = new User ("aman", "aman@email.com");
let teacher1 = new User ("Dean", "dean@college.com");


let admin = new Admin("Admin","admin@gmail.com");

//Asynchronous and Synchronous Function


//Callbacks Synchronous


function sum (a,b){


    console.log(a+b);
}


function calculator(a,b,sumCallback){

sumCallback(a,b);

}


calculator(1,2,(a,b)=>{

console.log(a+b);


});


//Callbacks Asynchronous


const hello = ()=>{

    console.log("hello");
}

setTimeout(hello,3000);


//Callback Hell

/* Nested callbacks stacked below one another forming a pyramid structure.
This style of programming becomes difficult to understand & manage.*/



//Promise in JS

//It is used for eventual completion of task. It is an object in JS
//It is used to resolve Callback Hell problem. It had 3 stages pending, 
//resolved and failed
//resolve and reject are cllbacks provided by JS


//syntax: let promise = new Promise (resolve, reject) => { .... } )


// function getData(dataId,getNextData){


//     return new Promise((resolve,reject)=>{

// setTimeout(()   =>{

// console.log("data", dataId);
// resolve("success");
// // reject("error");
// if(getNextData){

//     getNextData();
// }

// },5000);
// });
// }





//Then & Catch

const getPromise=()=>{
return new Promise((resolve,reject) =>{

console.log("I am a promise");
// resolve("success");
// reject("network error");
});
};


let promise=getPromise();
promise.then((res) => {

console.log("promise fulfilled",res);
});

promise.catch((err) =>{
console.log("rejected",err);

});





