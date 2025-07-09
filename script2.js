// function checkName(name, callback) {
//     console.log("Checking name:", name);
//     callback();
// }

// function placeOrder(callback) {
//     console.log("Order placed.");
//     callback();
// }

// function showOrderSummary(callback) {
//     console.log("Showing order summary...");
//     callback();
// }

// function eatFood(callback) {
//     console.log("Eating food...");
//     callback();
// }

// function payBill() {
//     console.log("Paying the bill...");
// }

// checkName("Poorva", function () {
//     placeOrder(function () {
//         showOrderSummary(function () {
//             eatFood(function () {
//                 payBill();
//             });
//         });
//     });
// });



// console.log("hello ");

// setTimeout(()=>{
//     console.log("hi");
// },0);

// console.log("after hi");

// var a=200;
// console.log(a);

// var b=300;
// console.log(b);

// abc()
// function abc(){
//     console.log("abc");
// }

// function def(){
//     console.log("def");
// }

// def ()

// console.log("end of code");


// console.log("script starts");
// var a=200;
// console.log(a);
// function abc(){
//     console.log("abc");
//     function def(){
//         console.log("def");
//         function ghj(){
//             console.log("ghj");
//         }
//         ghj();
//     }
//     def();
// }
// abc();  // nested function main execution context bhi ek ke andar ek bnte hai 
//lexical environment  - 
//lexical scope  - the scope going from child to grandparent
// {
//     //compound statement 
// }
// function xyz(){
//     var a=1;
//     var b=2;
//     var c=3;
//    // console.log(x); //not defined
//     function yuj(){
//         let x=5;
//         function abc(){
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     abc();
// }
//     yuj();
// }
// xyz();

//hoisting always declare your variables on top of the code 
//closures it wraps the outer function's scope in the returned inner function
//scope chain - the chain of lexical environments from child to grandparent

// setTimeout(()=>{
//     console.log("hii");
// },2000);
// here var is global so output 6 only 6 times 
// for(var i=0;i<=5;i++){
//     setTimeout(()=>{
//          console.log(i);
//     },2000);
// }



// data hinding and encapsulation, memoization - benifit of closure 
//disadvatage - it is not garbage collected and overconsumption of memory


// var a=0239;          // 239 will be ans 
// console.log(a);

// var b=0237;         //159 
// console.log(b);
// higher order function - those functions in which we pass function as argument and return function .
//higher order components () - those components in which we pass component as argument and return component .
// function sumoftwo(a,b){
//     return a+b;
// }

// function calculate(logic, a,b){
//     return logic(a,b);
// }
// var ans=calculate(sumoftwo,2,3);
// console.log(ans);

//we have student details witn name and fees, and calculate emi with fees return fees/10 and welcome with name,fees,emi 

// function studetails(name,fees){
//     var emi=calculate(fees);
//     return name+" "+fees+" "+emi;
// }
// function calculate(fees){
//     return fees/10;
// }
// var output=studetails("ravneet",30000);
// console.log(output);
//console.log("welcome");
  
//callback function - pehel main function print complete and then callback function 
//console.log("script start");
// function checkmenu(){
//     setTimeout(()=>{
//         console.log("menu is checking ");
//     },3000);  
// }
// checkmenu();
// function order(){
//     setTimeout(()=>{
//         console.log("menu is order");
//     },2000);  
// }
// order();
//callback function - pehel main function print complete and then callback function
//it is a pyramid of doom , it creates callback hell and loose control over the code 
//so comes the promises, async await 
//promises uses .then, ,catch

// function checkName(cb){
//     console.log("check menu");
//     setTimeout(cb,3000);
// }

// function orderPlace(cb){
//     console.log("ordered placed ");
//     setTimeout(cb,5000);
// }
// function orderSurvey(cb){
//     console.log("order survey ");
//     setTimeout(cb,10000);
// }
// function eatFood(cb){
//     console.log("eating food ");
//     setTimeout(cb,15000);
// }
// function billPay(cb){
//     console.log("payment done");
//     setTimeout(cb,2000);
// }
// function saufEat(cb){
//     console.log("sauf eating");
//     setTimeout(cb,2000);
// }
// function exit(){
//     setTimeout(()=>{
//         console.log("exit");
//     },3000);
// }
// checkName(()=>{
//     orderPlace(()=>{
//         orderSurvey(()=>{
//         eatFood(()=>{
//             billPay(()=>{
//                 saufEat(()=>{
//                     exit();
//                 })
//             })
//         })
//         })
//     })
// })
// console.log("script ends");


// var card=["shoes","watches"];
// function orderPlace(cart){

//     //number of cart items, total price cart*1000
// }
// function orderGenerate(){
//     //random order id total price, order info 
// }
// function adddetail(){
//     //name, address
// }
// function paygateway(){
//     //payment success of order id 
// }
// function ordersummary(){
//     //order id, name, address, payment status, 
// }


// orderPlace(cart, )

//MAP FILTER REDUCE 
var arr=[1,2,3,4,5,6,7,8];
// function calculate(arr){
//     let output=[];

//     for(var i=0;i<arr.length;i++){
//         output.push(arr[i]*2);
//     }
//     return output;
// }
// var o=calculate(arr);
// console.log(o);

//map function always return a new 

Array.prototype.calculate= function(logic){
    let output=[]
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
function doublenum(x){
    return x*2;
}
const out=arr.calculate(doublenum);
console.log(out);

//filter prototype 
//filter we pass callbacks and the arguments are the elements of the array

Array.prototype.calculate = function(logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        if (logic(this[i])) {         // only push if condition is true
            output.push(this[i]);
        }
    }
    return output;
};


//Prototypes allow objects in JS to inherit properties/methods from other objects. 
// This forms the basis of inheritance in JavaScript — through a chain.