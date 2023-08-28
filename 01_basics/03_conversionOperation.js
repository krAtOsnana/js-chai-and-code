let score=23;
let points="234a";//points=null --> newPoints=0(number)
console.log(typeof score);
console.log(typeof points);
let newPoints=Number(points);
console.log(typeof newPoints);
console.log(newPoints); //NaN->not a number
 /*
 conversion to number:
 "33"->33;;
 "333abc"->NaN()
 true->1::false->0;

 */

 let stastus="g";
 let statusInboolean=Boolean(stastus);
 console.log(statusInboolean);
/*
conversion to boolean::  
1->true
0->false
""->false
"kushagra"->true
*/ 
let age=23;
let stringAge=String(age);
console.log(stringAge);
console.log(typeof stringAge);