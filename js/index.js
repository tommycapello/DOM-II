// Your code goes here

window.addEventListener("load", function(){
    const response = prompt("Are you ready to have fun?", "Yes or No");
    return response
});

const header = document.querySelector('header')
header.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "salmon"
})

const logo = document.querySelector('.logo-heading')
logo.addEventListener("mouseover", ()=>{
    logo.style.transform = "rotate(360deg)";
    logo.style.transition = "transform .5s";
})

const intro = document.querySelector('.intro p')
intro.addEventListener('keydown', (event)=>{
    if(event.key === 9){
    event.target.style.fontSize = "2rem";
}
});

const adventureImg = document.querySelectorAll('img')[1]
adventureImg.addEventListener('dblclick',(event)=>{
event.target.style.transform = "rotateZ(360deg)";
event.target.style.transition = "transform 1s";
event.stopPropagation();

})

const waterImg = document.querySelectorAll('img')[2]
waterImg.addEventListener('mousemove', ()=>{
    waterImg.style.transform = "skew(360deg)";
    waterImg.style.transition = "transform 2s"
})
