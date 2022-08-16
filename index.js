const color=['red','yellow','green','purple','violet','gray'];
const btn = document.querySelector('.btn');
const main= document.body;
const span = document.getElementById('show-color');
btn.addEventListener("click",()=>{
    console.log('clicked');
   const index= getrandom();
    document.body.style.backgroundColor=color[index];
    span.textContent=color[index];
})
const getrandom=()=>{
    const num =Math.floor(Math.random()*color.length);
    console.log(num);
    return num;
}