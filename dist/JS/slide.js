var imgSlides = document.getElementsByClassName('spacePlanet');
var destInfo = document.getElementsByClassName('destination-info');

let initialIndex = 1;

Showslide(initialIndex);

function currentSlide(m){
Showslide(initialIndex += m);
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

