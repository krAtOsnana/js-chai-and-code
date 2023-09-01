//objects
/*
there are two ways in which we can declare a object
1>literal(multiple instances)
2>constructor(singleton object)
                ***NOTE***
whenever we create an object from constructor we create a singletone object
*/


let mySymbol=Symbol("key1")
 
Object.create    //constructor method
const JSuser={        //literal method
   name:"kushagra",
   "full name":"kushagra kumar",
   year:3,
   course:"full stack using MERN",
   [mySymbol]:"real value",

   greeting :function(){
    console.log("hellow JS user");
   }
}   


// console.log( typeof JSuser[mySymbol]);
  
// console.log(JSuser.name);   //aam zindagi
// console.log(JSuser["full name"]);  //mentos zindagi



/*             ***NOTE***
we cannot use . method to access those value whose key have multiple string eg. "full name"
we have to use the [brackets]
*/
 
// console.log(JSuser);

// JSuser.name="kushu"
// console.log(JSuser["name"]);
// Object.freeze(JSuser);    //after freezing we can't change the data of our object
// JSuser.name="kushagra"
// console.log(JSuser["name"]);

JSuser.swagat=function(){
    console.log(`hellow ${this.name} welcome to JS of ${this.year} year`);
}

JSuser.greeting();
JSuser.swagat(); 

/**
 * NOTE
 * mostly we use (.) operator in js to access the value in  object
 * but sometime for secial cases like symbol and mulitletter key we have to use [] brackets
 */