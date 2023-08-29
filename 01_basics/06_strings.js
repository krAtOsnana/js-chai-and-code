/*
Strings:

*/

var name="kushagra"
var killCount=3.5
console.log(name + killCount+ " halwa");  //out datted (not recomended)
 
//new syntax
//backTicks(``)->string interPolation 
console.log(`this is new way ${name} and my kill count is${killCount} `);
//benefit ->we can do manything onthe go

//2nd method of declaration

var gameName=new String("krato&N@na")
console.log(gameName.length);
console.log(gameName.toUpperCase());