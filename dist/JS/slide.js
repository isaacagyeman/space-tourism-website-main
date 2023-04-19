var imgSlides = document.getElementsByClassName('myslide');
var destInfo = document.getElementsByClassName('myslide2');
var destTab = document.querySelectorAll('.destTab');
var menuIcon = document.querySelector('#menuIcon');
var closeIcon = document.querySelector('#closemenu');
var menu = document.querySelector('.menu')
let initialIndex = 1;

Showslide(initialIndex);

function currentSlide(m){
Showslide(initialIndex = m);
}

function Showslide(n){
 let i;
 if(n > imgSlides.length){
    initialIndex = 1;
 }
 if(n < 1){
    initialIndex = imgSlides.length;
 }
 for(i = 0; i < imgSlides.length; i++){
    imgSlides[i].style.display = 'none';
    destInfo[i].style.display = 'none';
 }
 imgSlides[initialIndex - 1].style.display = 'block'
 destInfo[initialIndex - 1].style.display = 'block'
}

destTab.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        destTab.forEach(f=>f.classList.remove('active'));
        e.target.classList.toggle("active");
    })
})

menuIcon.addEventListener('click',()=>{
// prompt("you clicked the menu icon ")
menu.style.display = 'block';
menuIcon.style.display = 'none';
});

closeIcon.addEventListener('click',()=>{
menu.style.display  = 'none';
menuIcon.style.display = 'block'
});