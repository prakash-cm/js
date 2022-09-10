// const areFindkarLo = document;
// const open_popup = areFindkarLo.querySelector("#open_popup");
// const popup = areFindkarLo.querySelector(".popup")
// open_popup.addEventListener("click",()=>{
//     popup.classList.contains('popup_active')? popup.classList.remove('popup_active'): popup.classList.add('popup_active')
// })
// areFindkarLo.querySelector("#close_popup").addEventListener('click',()=>{
//     popup.classList.add('popup_active')
// })




const _ = document;
const Q = (p)=>{
    return _.querySelector(p);
}
const open_popup = Q("#open_popup");
const popup = Q(".popup")
open_popup.addEventListener("click",()=>{
    popup.classList.contains('popup_active')?popup.classList.remove('popup_active'): popup.classList.add('popup_active')
})
Q("#close_popup").addEventListener('click',()=>{
    popup.classList.add('popup_active')
})




// (function(){
//     const num  = document.querySelectorAll(".num")
//     let total = 0
//     num.forEach((element)=>{
//         if(!isNaN(element.innerHTML))
//                 total+=parseFloat(element.innerHTML);
//     })
//     document.querySelector(".n").innerHTML = `Total Sum = ${total}`
// })()



const obj =  {
    data:[
        {name:"Potatao",price:20,image_path:"./image/delhivary.jpg",rating:5},
        {name:"Tomato",price:20,image_path:"./image/delhivary.jpg",rating:5},
        {name:"Rahul",price:20,image_path:"./image/delhivary.jpg",rating:3},
        {name:"mukesh",price:30,image_path:"./image/delhivary.jpg",rating:5},
        {name:"mukesh",price:20,image_path:"./image/delhivary.jpg",rating:5},
        {name:"Kumar",price:60,image_path:"./image/delhivary.jpg",rating:5},
        {name:"Werty",price:10,image_path:"./image/delhivary.jpg",rating:5},
        {name:"gtur",price:30,image_path:"./image/delhivary.jpg",rating:5},
        {name:"qwwwty",price:50,image_path:"./image/delhivary.jpg",rating:5},
       
    ]
}

const jsonString = JSON.stringify(obj)
console.log(jsonString)


document.querySelector('.ecom').innerHTML = obj.data.map(d=>  
    `<div class="col-md-3">
    <div class="card">
        <img src="${d.image_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${d.name}</h5>
          <p class="card-text">Rating ${d.rating}</p>
          <a href="#" class="btn btn-primary">Buy Now ${d.price}</a>
        </div>
      </div>
   </div>
`
).join(" ")






