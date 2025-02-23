// ----------------problem1--------------------
//  const container=document.createElement('div')
// const numberrow=document.createElement('div')
// container.appendChild(numberrow)
// container.classList.add('container')
// numberrow.classList.add('row')
// document.body.appendChild(container)

// for(let i=0 ;i<=100;i++){
//     const numberbox=document.createElement('div')
//     numberbox.classList.add('col-2',"p-3","text-white",'text-center')
//     numberbox.style.backgroundColor=i%2===0?'blue': 'brown'
//     numberbox.style.border='2px solid white'
//     numberbox.style.borderRadius='4px'
//     numberbox.innerHTML=i
//     numberrow.appendChild(numberbox)
// }

// ----------------problem2--------------------

// const products = [
//     {
//       title: "Headphones",
//       description: "This is a description",
//       price: 23,
//     },
//     {
//       title: "Keyboard",
//       description: "This is a description",
//       price: 50,
//     },
//     {
//       title: "Iphone",
//       description: "This is a description",
//       price: 1000,
//     },
//     {
//       title: "Iphone",
//       description: "This is a description",
//       price: 1000,
//     },
//     {
//       title: "Iphone",
//       description: "This is a description",
//       price: 1000,
//     },
//   ];

//   const procontainer=document.createElement('div')
//   document.body.appendChild(procontainer)
//   procontainer.classList.add('container','bg-warning','py-5')

//   function data(product){
//     products.forEach(element => {
//         const card=document.createElement('div')
//         card.classList.add('card','my-3','text-center')
//         card.innerHTML=`<h2 class="py-3">${element.title +" | $"+ element.price}</h2>
//         <h6>${element.description}</h6>`
//         procontainer.appendChild(card)
        
//     });
//   }
//   data(products)

// ----------------problem3--------------------

// const container=document.createElement('div')
// const row=document.createElement('div')
// container.appendChild(row)
// container.classList.add('container')
// row.classList.add('row')
// document.body.appendChild(container)
// row.innerHTML=`
// <label for="name" >First Name:</label>
// <input class="input" type="text" id="name" >
// <label for="last name">Last Name:</label>
// <input class="input" type="text" id="last name" >
// <label for="Age">Age:</label>
// <input class="input" type="text" id="Age" >
// <label for="Course">Course:</label>
// <input class="input" type="text" id="Course" >
// <button class="btn">Register</button>
// <p id="thank" class="mt-5"></p>
// `
// let label=document.querySelectorAll("label")
// let input=document.querySelectorAll("input")
// let btn=document.querySelector("button")
// input.forEach(input => {
//   input.classList.add('mb-3')
//   input.style=`
//   border:1px solid gray;
//   border-radius:6px ;`
  
// });
// btn.style=`
// background-color: green;
// color:white;
// `
// thank.style=`

// text-align:center ;
// display:none;
// `
// label.forEach(label => {
//   label.classList.add('fs-5' , 'p-0')
  
// });

// btn.addEventListener('click',()=>{ 
//   let  Name=document.getElementById('name').value
//   let  L_Name=document.getElementById('last name').value
//   let  Age=document.getElementById('Age').value
//   let  Course=document.getElementById('Course').value

//   if(Name&&L_Name&&Age&&Course){
//     let text=`
//     Thank You For The Registration
//     First Name:${Name}<br>
//     Last Name:${L_Name}<br>
//     Age:${Age}<br>
//     Course:${Course}<br>
//     `
//     thank.innerHTML=text
//     thank.style.display='block'

//   }

// })

// ----------------problem4--------------------
const container=document.createElement('div')
const row=document.createElement('div')
container.appendChild(row)
container.classList.add('container')
row.classList.add('row')
document.body.appendChild(container)
row.innerHTML=`
<div class="col-12"><h1 id="header" class="mb-5 d-flex justify-content-center ">Notes</h1></div>
<div class="col-12 d-flex fs-5 justify-content-center "><input type="text" id="note" name="note" class="py-2 px-1 me-2 w-75" placeholder="Type your note">
<button id="btn-add" class="p-3 ">+ create</button></div>
`
// document.body.style.backgroundColor='blue';
document.body.classList.add('bg-warning-subtle')