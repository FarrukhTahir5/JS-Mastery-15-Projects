const number =document.querySelector(".number")
// const add =document.querySelector(".add")
// const resetCount =document.querySelector(".reset")
// const sub =document.querySelector(".subtract")
const generateButton=document.querySelector(".generate")

generateButton.addEventListener("click",(e)=>{
        number.innerHTML=Math.floor(Math.random()*100)+1;
})


// add.addEventListener("click",()=>{
//     count.innerHTML++;
// })
// sub.addEventListener("click",()=>{
//     count.innerHTML--;
// })
// resetCount.addEventListener("click",()=>{
//     count.innerHTML=0;
// })