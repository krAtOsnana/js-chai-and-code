const items=["soap","toothPaste","faceWash","shampoo","mouthWash"]
// var returnVal=items.forEach((product)=>{
// console.log(product)}
// )

//
//#Notes forEach loop returns undefined 

// var returnVal=items.forEach((product)=>{
// return product;    
// })
// console.log(returnVal);

const nums=[1,2,3,4,5,6,7,8,9]
 
const returnVal1=nums.filter((val)=>{
//    var ans= val<6;
//    return ans;
    return val<6;
})
const returnVal2=nums.filter((val)=>val<6)      //
console.log(returnVal1);