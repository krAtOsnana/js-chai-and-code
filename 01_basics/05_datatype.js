//DAtatypes(js is dyanmically typed language)
/*
->>bifercation is mainly based on how we store data in the memory and how we access that data
1> PRIMITIVE {call by value datatypes}   (typeof)
 1>Number
 2>Bigint
 3>Boolean
 4>String
 5>null (object)
 6>undefined  (undefined)
 7>Symbol      (symbol)

2>NON PRIMITIVE (call by reference or reference type)
 1>array[]      (object)
 2>object{}     (object)
 3>function(){}     (function or object function)
*/
var height=undefined
console.log(typeof height);
var money=null
console.log(typeof money);
var suprhero=["spyder","emphisto"];
console.log(typeof suprhero);
var chaman={
    name:"ritik",
    hair:"curlu"
}
console.log(typeof chaman);
 
var game=function(){
    console.log("hellow woerld");
}
console.log(typeof game);