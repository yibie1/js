/*

- element.addEventListner(event, function)

Note: event name is a string and haven't prefix like on, 

this keyword is refer the current object 


call() and apply(): allow to us to write a method in d/t objects 

*/

// example call() and appl()

var stu_details = {
    stu_info : function(){
    return this.name;
    }
}

var info = {
    
    name : 'Yibe',

}

console.log(stu_details.stu_info.apply(info))

/*
- bind(): create new function whose this keyword refrence 
*/

// Hosting: move declaration of variable and function on the top, in js we can use valtiables before declaration 

// just only in declaraion not intialization 


// "use strict" just show silent errors

//js promise: is an object to asure to implment something in the future when it needed, it used to mange asychrons oprations, and use for better code readablity


// function fun(){
//     prompt("This is me ", "Yibe")

// }
// fun();
// getattribute and removeattribue
// reset() used to reset the form element 



var a; 
var i = 0;
a = setInterval(()=>{ // repeat with a given time interval, but setTimeOut is  excute after a give time 

    i++;
  i >= 60 ? i === "1 Mi"+ i : i;

  console.log(i);

}, 100)