/**
 * IIFE: immediately invoked function expression
 * why we use IIFE?
 * ans> global scope ke pollution se dikkat hoti hai kai baar
 * to aoide the pollution of that variable in the global scope 
 * we use IIFE
 * 
 */

//the function written below if immediately invoked but not IIFE

// function chai (){
//     console.log("chai pilo frands");
// }chai()

//function below is IIFE 
(function chai (){      //named IIFE
    console.log("chai pilo frands");            //(function definition )(execution call)
})();
 
//without ending with an arrow function IIFE fun throws an error we have to 
//use an ()(); 

((name)=>{      //unNamed IIFE
    console.log(`chai pilo ${name}`);            //(function definition )(execution call)
})("kushagra")


//note: we can use IIFE without ; in case if we dont have an another IFFE adjacent to each other
//if we want to write two IIFE function adjacent to each other we ahve to use ;
// reason-->ye jo iIFE hai vo invoke to ho jaata hai
// par use pata nhi hota hai li use rookna kaha hai
//aise situation me apko ; use krna padta hia 


