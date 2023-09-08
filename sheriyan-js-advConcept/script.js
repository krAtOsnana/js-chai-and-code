//** higherOrder function **//
//higher order function are the function which accepts the function as a parameter or returns the function or both
function abcd(val){

}
abcd(function(){})
//OR

function bcdf(){
    return function(){}
}

//EXAMPLE
var arr=[1,2,3,4]
arr.forEach(function(){})   //forEach is a higher order function


//** CONSTRUCTOR function **//
//normal function jisme this keyword ka use ho and function ko call krte samay new keyword ka use krein

function biscutMaker(){
    this.width=12;
    this.height=14;
    this.taste="sugar";
    this.color="black"
}

var bis1=new biscutMaker()
var bis2=new biscutMaker()
var bis3=new biscutMaker()
//jab apke paas aisa koi bhi mauka ho ki apko ek jaisi properties wale bohot sare elements abnane hai us waqt ap constructor function use krte hai
function button(color){
    this.radius=3;
    this.color=color;
    this.icon=false;
    this.pressable=true;
}

var redbut=new button("red")
var greembut=new button("green")


/** first class function **/
//in any language when you treat a function   like a variable you can say that it is a first class function(you can save them in an variable and pass them in other function)

var func = function abdf(){

}  

/**
function abcd(){
    this.age=12;
} 

new abcd()

implemented as: 

{
    age:12;
}

 */

/** iife (immediately invoked function expression) **/

//iife hai function ko turant chalane ki kala,iss tareeke se ki hum log koi private varioable baba paeye
(function(){
    var a=12
})()