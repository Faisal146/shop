const slide = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");

let counter = 1;
let current = 1;
var played
const size = slides[0].clientWidth;

slide.style.transform = "translateX(" + -size * counter + "px)";
console.log(slide);

nextBtn.addEventListener("click", function () {
  if (counter >= slides.length - 1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  current++;
  played = current - 1;

  console.log(current -1 + 'is played')
  slide.style.transform = "translateX(" + -size * counter + "px)";
   opacityControl()

   
  
});

prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  current--;
  played = current + 1;
  console.log(current + 1 + 'is played')
  slide.style.transform = "translateX(" + -size * counter + "px)";
   opacityControl()

   
 
});

slide.addEventListener("transitionend", () => {
  if (counter == 5) {
    current = 1;
  } else if (counter == 0) {
    current = 4;
  } else {
  }
  console.log(current + " is playing");

  if(current == 1){
    sliding1.play(0);
  } 
  // else if(current == 2){
  //   sliding2.play(0);
  // } else if(current == 3){
  //   sliding3.play(0);
  // } else if(current == 4){
  //   sliding4.play(0);
  // }
 



  if (slides[counter].classList[2] === "lastclone") {
    slide.style.transition = "none";
    counter = 4;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (slides[counter].classList[2] === "firstclone") {
    slide.style.transition = "none";
    counter = 1;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

var sliding1 = new TimelineLite();
var sliding2 = new TimelineLite({paused : true});
var sliding3 = new TimelineLite({paused : true});
var sliding4 = new TimelineLite({paused : true});

sliding1.fromTo(".slide1 span", 0.5, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide1 h3", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0} ,).fromTo(".slide1 h1", 0.3, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide1 p", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide1 button", 0.3, { opacity: 0, y: 40 }, {  opacity: 1, y: 0});

sliding2.fromTo(".slide2 span", 0.5, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide2 h3", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide2 h1", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide2 p", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide2 button", 0.3, { opacity: 0, y: 40 }, {  opacity: 1, y: 0});

sliding3.fromTo(".slide3 span", 0.5, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide3 h3", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide3 h1", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide3 p", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide3 button", 0.3, { opacity: 0, y: 40 }, {  opacity: 1, y: 0});

sliding4.fromTo(".slide4 span", 0.5, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide4 h3", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide4 h1", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide4 p", 0.4, { opacity: 0, y: 40 }, {  opacity: 1, y: 0}).fromTo(".slide4 button", 0.3, { opacity: 0, y: 40 }, {  opacity: 1, y: 0});


// sliding2.fromTo(".slide2 span", 2, { opacity: 0 }, { opacity: 1 });
// sliding3.fromTo(".slide3 span", 2, { opacity: 0 }, { opacity: 1 });
// sliding4.fromTo(".slide4 span", 2, { opacity: 0 }, { opacity: 1 });


// var slidingclose1 = new TimelineLite({paused : true});
// var slidingclose2 = new TimelineLite({paused : true});
// var slidingclose3 = new TimelineLite({paused : true});
// var slidingclose4 = new TimelineLite({paused : true});

// slidingclose1.to('.slide1 span', 1 , {opacity: 0});
// slidingclose2.to('.slide1 span', 1 , {opacity: 0});
// slidingclose3.to('.slide1 span', 1 , {opacity: 0});
// slidingclose4.to('.slide1 span', 1 , {opacity: 0});



function opacityControl(){

  switch (current) {
    case 1:
        sliding1.play(0);
        break;
    case 2:
        sliding2.play(0);
        break;
    case 3:
      sliding3.play(0);
       break;
   case 4:
     sliding4.play(0);
      break;
  
    default:
        break;
  }

}

setInterval(() => {
    nextBtn.click();
}, 3400);
