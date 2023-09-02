//****OBJECT declaration using constructor
            //singleton object                                   //non singleton object
const tinderUser= new Object()    //----->(simillar)          //const tinderUser={}
console.log(tinderUser);
 tinderUser.id="kushagra"
 tinderUser.name="kushagra"
 tinderUser.isLggedIn=false
   
 const regularUser={
    email:"kkushagra626@gmail.com",
    full_name:{
        first_name:"kushagra",
        middle_name:"kumar",
        last_name:{
            opt1:"gupta",
            opt2:"sahu",
            opt3:"prasad"
        }
    }
 }
 //console.log(`${regularUser.full_name.first_name} ${regularUser.full_name.middle_name} ${regularUser.full_name.last_name.opt2}`);

 var obj1={1:"a",2:"b"}
 var obj2={6:"z",4:"p"}
 var obj4={3:"e",9:"h"}
 //var obj3={obj1,obj2}       //not an optimal way it's a object inside a object

//var obj3={...obj1,...obj2}        //good option
// const obj=Object.assign(TARGET,SOURCR)
const obj3=Object.assign({},obj1,obj2)      //{}-->it is an optional parameter (good practice)

// console.log(obj3);
 //const obj=Object.assign(obj1,obj2,obj4)        //here we copy obj2 and obj4 in obj1 thats why we give an {} tomaintain our original object
const obj=Object.assign({},obj1,obj2,obj4)  //here we use an empty object{} and do not change any of our original object
 console.log(obj);
 console.log(Object.keys(obj));
 console.log(Object.values(obj));
 console.log(Object.entries(obj));