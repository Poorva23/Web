// //currying - we pass single argument/parameter at a time 
// function sum(a,b,c){
//     console.log(a+b+c);
//     return a+b+c;
// }
// sum(4,5,6);

// function subway(bread,patty,cheese){
//     console.log(bread is ${bread} with patty:${patty} cheese: ${cheese});
// }
// subway("bhj","gvhbjn","hbjnkm")

// function sub2(bread){
//     return function(patty){
//         return function(cheese){
//             console.log(bread is ${bread} with patty:${patty} cheese: ${cheese});
            
//         }
//     }
// }
// sub2("gbhjnk")("ghbnj")("hj")       // currying function call 

//event - actions or events that occur 
//event listeners 


//dom(document object model) ek virtual page , how screen pe render hoga , tree like structure (heirarichal)

// const container=document.getElementById("container");
// container.addEventListener("click",()=>{
//     console.log("container ");
// })
// script tag - html load and parsing paused script download huyi forr parsing start huyi (async)
// defer is main pehle html parsing hoti hai 

//event capturing(top to bottom ) and bubbling (bottom to top)

// const grandparent= document.getElementById("grandparent")
// const parent= document.getElementById("parent")
// const child= document.getElementById("child")

// grandparent.addEventListener('click',()=>{
//     console.log("red");
// },true);

// parent.addEventListener('click',()=>{
//     console.log("green ");
// },true);

// child.addEventListener('click',()=>{
//     console.log("blue");
// },true);


//bottom to top event bubbling 


//event listeners are very expensive (agar zyada lga de toh uske solve krne ke liye ) solution - 

//event delegation - we reduce number of event listners 

const unorder=document.getElementById("navbar");
unorder.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI"){
        console.log(event.target.textContent);
    }
})

const newelement=document.createElement("li");
newelement.innerText="new";
unorder.append(newelement);


// append - main multiple daal skte  and append child - main single