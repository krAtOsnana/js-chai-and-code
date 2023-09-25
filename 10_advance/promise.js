// const promiseOne = new Promise(function(resolve,reject){
//     //do a async task
//     //DB call,cryptography,network
//     setTimeout(function(){
//         //console.log("async task done");
//         resolve();

//     },1000)
// })

// promiseOne.then(function(){
//     //console.log("promise consumed");
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2 done");
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("async task2 resolved");
// })

// const promiseThree= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise3 ");
//         resolve({name:"kushagra",year:"3rd"})
//     },1000)
// })
// promiseThree.then((studentINFO)=>{
//     console.log(studentINFO);
// })

//   const promiseFour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false ;
//         if(!error){
//         resolve({name:"kushagra",year:"3rd"})
//     }
//         else{
//         reject("error:something went wrong")
//         }
//     },1000)
// })

// promiseFour
// .then((info)=>{;
//     return info.name
// })
// .then((name)=>{
//     console.log(name)
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("promise has been finally completed");
// })

fetch("https://api.github.com/users/krAtOsnana")    //https://jsonplaceholder.typicode.com/users
.then((response)=>{
    return response.json();
}).then((info)=>{
    // for (const i of info) {
    //     console.log(i.address.street);
    // }
    console.log(info.login);
})
.catch((error)=>{
console.log(error);
})