//  const user={
//     userName:"kushagra",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.userName } welcome to the coures`);
//     }
//  }
// user.welcomeMessage();
// user.userName="Nishant"
// user.welcomeMessage()
//console.log(this);     //in tbrowser environment this context to window
//browser ke andar global object is a window object


//  function chai(){
//      let usernaeme="kush"
//     console.log(usernaeme);
// }
// chai()


//arrow function
 
// var chai= ()=>{
//     console.log(this);
// }
//  chai()




// var addNum= (a,b)=>{           //explicite return
//     return a+b ;
// }




//var addNum=(a,b) => a+b         //implicite rturn arrow function

var addNum=(a,b) => (a+b) 

console.log(addNum(2,4));


//const objRet=()=>{userName:"kushagra"}  //undefined
//to return an object we have to wrap it into a parenthesis()


const objRet=()=>({userName:"kushagra"})

console.log(objRet());