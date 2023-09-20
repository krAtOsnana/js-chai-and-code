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
    return val<6;       //HERE we have to explicitrly return a valur because we oopen a scope
})
const returnVal2=nums.filter( (val) => val<6 )      //IMPLICITE RETURN
//console.log(returnVal1);

const newNums=[]
 nums.forEach((val)=>{
if(val>5){
    newNums.push(val);
    }
 })

 //console.log(newNums);  