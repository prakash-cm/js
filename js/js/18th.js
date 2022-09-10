// var obj1 = [{name:"nishant"}]  // javascript object

// //  JSON        //  serilization  
// //  JSON.stringfy()
// //  JSON.parse()

// var obj = '{"name":"nishant"}'  // json object

// var arr = '[{"name":"nishant"},{"name":"kumar"}]'  // json array
// // convert OBJECT to JSON
// var k = JSON.stringify(obj1);
// console.log(k)

// // converst JSON to OBJECT
// var f = JSON.parse(obj);
// console.log(f);


// // call back function


// console.log("hello");
// function lagegaTime(){   // trigger call back

//     //  5 sec
//     console.log("time lagega bhai");
// }
// setTimeout(lagegaTime,5000); // register call back
// console.log("Process");
// console.log("end")



// function display()
// {
//     setTimeout(
//         ()=>{
//             console.log(a);
//             console.log(b);
//         },2000)
//     let a=5,b=10;
// }
// display();


// const request = function(order,time){
//     console.log("Order Received "+order);
//     response(function(){
//         console.log("Response Order NO :"+order);
// },time)
// }
// const response = function(manish,time){
//     setTimeout(manish,time)
// }

// request(5,2000)
// request(10,30000)
// request(243,10000)
// request(1005,8000);

//clearTimeout()


