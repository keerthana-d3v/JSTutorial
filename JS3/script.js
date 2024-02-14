// console.log(window);

// console.log(window.document);//used to print the HTML
// console.dir(window.document); //used to print the properties of the object





//Accessing Elements from Page 

// let header = document.getElementById("heading");
// console.log(header);
// console.dir(header);


// let header2 = document.getElementsByClassName("heading-class"); // gets elements with same class name 
// console.log(header2);                                           // in the form of an array
// console.dir(header2);

// let header3 = document.getElementsByTagName("h2"); // gets elements with same class name 
// console.log(header3);                                           // in the form of an array
// console.dir(header3);

// let header4=document.querySelector(".heading-class"); //searches  element by id/class/tag and returns first element 
// console.log(header4);                                         
// console.dir(header4);

// let header5=document.querySelectorAll(".heading-class"); //searches  element by id/class/tag and returns node list of  ALL element 
// console.log(header5);                                         
// console.dir(header5);


//DOM Manipulation Properties


// console.log(header4.tagName); // .tagName mentions type of element tag 

// console.dir(document.body.firstChild);  //.firstChild mentions the first child element 
// console.dir(document.querySelector("div").children);  //.children mentions the children elements


// console.dir(document.querySelector("div").innerText);

// console.log(document.querySelector("div").innerText="HELLO WORLD"); //.innerText mentions inner/MODIFIES text of the element as well as its children


// console.dir(document.querySelector("div").innerHTML="<i> HELLO WORLD </i>");//.innerHTML mentions/MODIFIES inner text of the element as well as its children

// console.dir(document.querySelector("h1").innerText); //element has no visibility so doesn't show up
// console.dir(document.querySelector("h1").textContent); //used for hidden element texts




// Practice Problems 1


// let header=document.querySelector("h2");

// console.dir(header.innerText);
// header.innerText= header.innerText + " from Keerthana Panyam";

// console.dir(header.innerText);



// Practice Problems 2



// let divs=document.querySelectorAll(".box");
// console.log(divs);

// let idx=1;
// for(div of divs){

// div.innerText="new unique value "+ idx;
// idx++;

// };





//DOM Manipulations 2

//A) For Attributes 



// let div=document.querySelector("div");
// console.dir(div);

// let id= div.getAttribute("id"); //.getAttributes is used to get values to attributes
// console.dir(id);


// let name= div.getAttribute("name");
// console.dir(name);


// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// para.setAttribute("class","newClass"); //set attribute values for elements

// console.log(para.getAttribute("class")); 



//B) For Style



// let div=document.querySelector("div");

// div.style.backgroundColor="purple";
// div.style.fontSize="26px";

// .style._ is used to change the css styling of elements



//DOM Manipulation Remove/Add Elements


// let newBtn=document.createElement("button"); //used to create a new element
// newBtn.innerText="Click me!";


// let p=document.querySelector("p");
// div.append(newBtn);             //used to append the new element at the end of node(inside)

// div.prepend(newBtn);          //used to append the new element at the start of node(inside)


// div.before(newBtn);          //used to append the new element before node(outside)

// p.after(newBtn);          //used to append the new element after  node(outside)


// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i> hi i am new </i>";


// document.querySelector("body").prepend(newHeading);



// let p=document.querySelector("p");
// p.remove(); //remove element



// //Apprend child and prepend child 




//Practice Question 2


// let para=document.querySelector("p");



// // para.setAttribute("class","newClass");

// para.classList.add("newClass"); // .classList.add adds multiple classes to an element


// para.classList.remove("newClass"); 




//Events in JS





// let btn1 =document.querySelector("#btn1");

// btn1.onclick= () => {

// console.log("btn1 was clicked");
// let a=25;
// a++;
// console.log(a);

// };




// let div=document.querySelector("div");
// div.onmouseover =()=>{

//     console.log("you are inside div");
// }



//Event Object 


//it has info about an event objects properties andmethods

// let btn1 =document.querySelector("#btn1");

// btn1.onclick= (evt) => {

// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX, evt.clientY);

// };



//when you write an inline event and a script event on the same node, the inline one gets
//overwritten

//even with script event they can overwrite eachother based on order




//Event Listeners


//these are functions used to execute multiple elements on the same node/element 


//syntax : node.addEventListener(event, callback fn)


// let btn1 =document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>
//  {

// console.log('button 1 was clicked handler 1');
// console.log(evt);
// console.log(evt.type);

// });


// btn1.addEventListener("click",()=>
//  {

// console.log('button 1 was clicked handler 2');

// });



// const handler3= ()=>
//  {

// console.log('button 1 was clicked handler 3');

// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",()=>
//  {

// console.log('button 1 was clicked handler 4');

// });



// btn1.removeEventListener("click", handler3); //event can be removed of callback ref is the same


let modeBtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body")


modeBtn.addEventListener("click",()=>{

if(currMode==="light"){

currMode="dark";
body.classList.add("dark"); 
body.classList.remove("light"); 
// document.querySelector("body").style.backgroundColor="black";

}

else{
currMode="light";
body.classList.add("light"); 
body.classList.remove("dark"); 
// document.querySelector("body").style.backgroundColor="white";
}


console.log("current mode:", currMode);


});