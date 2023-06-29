$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>10){
      $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }
   
  }); 

//   toggle menu/navbar script
$(".menu-btn").click(function(){
$(".navbar .menu").toggleClass("active");
$(".menu-btn i").toggleClass("active");

});


});

const slides= document.querySelectorAll(".slide");
var counter=0;

slides.forEach(
(slide,index)=>{
   slide.style.left= `${index * 100}%`
}
)

const goPrev = () => {
  if (counter == 0) {
      counter = slides.length - 1;
      slideImage();
  } else {
      counter--;
      slideImage();
  }
}

const goNext = () => {
  if (counter == slides.length - 1) {
      counter = 0;
      slideImage();
  } else {
      counter++;
      slideImage();
  }
}
const slideImage = () => {
slides.forEach(
  (slide) =>
  {
    slide.style.transform =`translateX(-${(counter)*100}%)`     
  }
)
}

// ---------------

const slidez= document.querySelectorAll(".slidei");
var counteri=0;

slidez.forEach(
(slidei,indexi)=>{
   slidei.style.left= `${indexi * 100}%`
}
)

const goPrevi = () => {
  if (counteri == 0) {
    counteri = slidez.length - 1;
    slideImagei();
} else {
    counteri--;
    slideImagei();
}
}

const goNexti = () => {
  if (counteri == slidez.length - 1) {
    counteri = 0;
    slideImagei();
} else {
    counteri++;
    slideImagei();
}
}
const slideImagei = () => {
slidez.forEach(
  (slidei) =>
  {
    slidei.style.transform =`translateX(-${(counteri)*100}%)`     
  }
)
}