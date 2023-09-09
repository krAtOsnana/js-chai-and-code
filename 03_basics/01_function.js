function addTwoNumber(num1, num2){
    return num1+ num2
    console.log("kushagra");

}

var x=addTwoNumber(7,4)
// console.log(x);
var y=addTwoNumber(3,"a")
// console.log(y);
var z=addTwoNumber(3,null)
// console.log(z);




function cartPrice(...num1){  //... (THIS IS REST OPERATOR)
    return num1
}
// console.log(cartPrice(200));
// console.log(cartPrice(200,446,234));
function cartPriceandItem(val1,val2,...price){
    console.log(`val1: ${val1}`);
    console.log(`val2: ${val2}`);
    return price
}

console.log(cartPriceandItem(200,432,12,53,32));

 var human={
    name:"kushagra",
    gender:"male"
 }

 function objectAcces(anyOBject){

    console.log(`name is ${anyOBject.name} and gender is ${anyOBject.gender}`);
 }

// objectAcces(human )
objectAcces({
    name:"kush",
    gender:"M"
})