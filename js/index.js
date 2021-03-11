// Your code goes here

window.addEventListener("load", function(){
    const response = prompt("Are you ready to have fun?", "Yes or No");
    return response
});

const body = document.querySelector('body');
body.addEventListener("mouseover", (e) => {
   body.style.backgroundColor = "rgb("+e.clientY+","+e.clientX+",40)";
});

const header = document.querySelector('header');
header.addEventListener("click", ()=>{
    header.style.backgroundColor = "salmon";
})

const logo = document.querySelector('.logo-heading')
logo.addEventListener("mouseout", ()=>{
    logo.style.transform = "rotate(360deg)";
    logo.style.transition = "transform .5s";
})

const intro = document.querySelector('nav a')
intro.addEventListener('mouseup', ()=>{
 document.querySelectorAll("p").forEach((item) => item.style.fontFamily = "Monospace");
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
      document.body.style.display = "none";
    }});

const mapImg = document.querySelector('img')[1]
mapImg.addEventListener('dblclick',(event)=>{
event.target.style.transform = "rotateZ(360deg)";
event.target.style.transition = "transform 5s";
})

const waterImg = document.querySelector('img')[2]
waterImg.addEventListener('mouseenter', ()=>{
    waterImg.style.transform = "skew(360deg)";
    waterImg.style.transition = "transform 5s"
})

const scrollEvent = document.querySelector('img')[0];
scrollEvent.addEventListener("scroll",  () => {
console.log(scrollEvent);
});
