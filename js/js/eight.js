// while loop
/*
while(boolean){
    statement 1;
    .
    .
    .
    statement nth;
}
*/

// var  a = 5;
// while(a >= 1){
//     console.log("Prakash");
//     a--;
// }


// var num = 2131212;
// var counter = 0; 
// while(num > 0 ){
//     let digit = num%10;
//     counter+=digit;
//     // if(digit == 1){
//     //     counter++;
//     // }
//     num = parseInt(num/10);
// }
// console.log(counter);

// var str = "welcome";
// let g=  str.length;
// console.log(g);

// var str = new String("welcome");
// console.log(str.length);


// var str = null;// new String("hello")
// var str1 = new String("hello")
// str1 = null;
// console.log(str === str1);



// var start = 4,end= 25;
// for(let i = start; i<=end;i++){
//     for(let j = 1;j<=10;j++){
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
//     console.log();
// }


// var str = "Welcome";

// //console.log(str[-1]);

// // let r = str[str.length-1]
// // console.log(r);


// var rev = "";
// for(let i = str.length-1 ; i>=0 ;i--){
//     rev+=str[i];
// }
// console.log(rev);



// var str ="welcome"
// var str1 = "home"

// var rev ="";
// var rev1 ="";
// for(let i = str.length-1 ; i>=0 ; i--){
//     rev+=str[i];
//     console.log();
// }
// console.log(rev);

// for(let j =str1.length -1 ; j>=0 ; j--){
//     rev1+=str1[j];

// }
// console.log(rev1);

let str = "abc";
let str1 = "bc";
op = "";
op1 ="";
for (let i = 0; 1< str.length; i++){
    var count = 0;
    for(let j =0 ; j< str1.length;i++){
        if(str[i]==str1[j]){
            count++;
        }
    }
    if(count == 0)
    op=op1+str[i];
}
console.log(op)


