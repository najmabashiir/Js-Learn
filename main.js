// variables
// let name="najma"
// let age=20
// console.log(`my name is ${name} my age is ${age}`)

// operators
// assignment opretor
// const name="najax"
// console.log(name)

// arithmetic oprator
// let x=5
// x+=5
// x=x*10
// x=x/2

// let mod= 15%2

// let y=10
// let x1=20
// let result=x1/y
// console.log(mod)
// console.log(x)
// console.log(result)


// commarison operator

// let var1=5
// let var2='3'
// = equal != not eqaula ===strict equal, !==not strict equal
//  < less than <= less than or eqaual
//  >greater than , >= greather than or equal
//  
// console.log(3==var2)
// console.log(3===var2)
// console.log(3!=var2)
// console.log(3!==var2)
// console.log(3>var2)
// console.log(3>=var2)
// console.log(3<=var2)
// console.log(3<var2)

// logic operators
// AND &&
// OR ||
// NOT !

// let var1= true && true
// let var2=true||true
// let var3=!true
// console.log(var1)
// console.log(var2)
// console.log(var3)



// control flow
// if else
// let grade =72
// if(grade>=90){
//     console.log("A+")
// }else if (grade>70 && grade<80){
//     console.log("B+")
// }else if (grade < 70 && grade>60){
//     console.log("c")
// }

// switch  
// const expr='appless';
// switch(expr){
//     case 'apple':
//         console.log("apple are 20$");
//         break;
//     case 'banana':
//         console.log("banana has 30$")
//         break;
//     default:
//         console.log("sorry we are out")
// }

// loops 
// for loop
//  START ,END, DRIVER

// for(let i=0; i<10; i++){
//     console.log(i)
// }

// for(i=1; i<1000; i++){
//     console.log(i)

// }

// do while loop
// let i=0;
// do{
//     i+=1
//     console.log(i);
// }while(i<5)

// let n=1;
// while(n<10 ){
//     n++;
//     console.log(i2)
// }

// infinte loop
// while(true){
//     console.log("hello")
// }

// arrays
let fruits= ["najuu","najax","najma"]
console.log(fruits[2])

// adding back 
fruits.push("yaah")
console.log(fruits)
// remove back
fruits.pop()
console.log(fruits)
// adding front
fruits.unshift("new element")
console.log(fruits)
// remve front
fruits.shift()
console.log(fruits)

// when you want to remove specific array 
let pos=fruits.indexOf("najax")
let remove=fruits.splice(pos,1)
console.log(pos)
console.log(remove)
console.log(fruits)

// loops through array
fruits.forEach(function(item){
    console.log(item)
})
