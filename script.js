let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let newArrival = document.querySelector(".new-arrival-box");
let newArrivalClothes = document.querySelectorAll(".new-arrival-clothes");

//for changing header background to black from transparent

window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 60;
  header.classList.toggle("active", windowPosition);
});

hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

let newArrivalOption = {
  threshold: 0.2,
};

//for anmation of new arrival section products
let newArrivalObserver = new IntersectionObserver(function (
  entries,
  newArrivalObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
      // newArrivalObserver.unobserve(entry.target);
    }
  });
},
newArrivalOption);

//newArrivalObserver.observe(newArrival);

newArrivalClothes.forEach((newArrivalClothes) => {
  newArrivalObserver.observe(newArrivalClothes);
});

//for scrolling of product images shoes in explore section

let slideLeftShoe = document.getElementById("shoe-slide-left");
let slideRightShoe = document.getElementById("shoe-slide-right");
let slideContentShoe = document.querySelector(".shoe-wraper");

slideLeftShoe.addEventListener("click", function () {
  slideContentShoe.scrollLeft -= 165;
});

slideRightShoe.addEventListener("click", function () {
  slideContentShoe.scrollLeft += 165;
});

//for scrolling of product images shirts in explore section

let slideLeftShirt = document.getElementById("shirt-slide-left");
let slideRightShirt = document.getElementById("shirt-slide-right");
let slideContentShirt = document.querySelector(".shirt-wraper");

slideLeftShirt.addEventListener("click", function () {
  slideContentShirt.scrollLeft -= 165;
});

slideRightShirt.addEventListener("click", function () {
  slideContentShirt.scrollLeft += 165;
});

//for scrolling of product images pants in explore section

let slideLeftPant = document.getElementById("pant-slide-left");
let slideRightPant = document.getElementById("pant-slide-right");
let slideContentPant = document.querySelector(".pant-wraper");

slideLeftPant.addEventListener("click", function () {
  slideContentPant.scrollLeft -= 165;
});

slideRightPant.addEventListener("click", function () {
  slideContentPant.scrollLeft += 165;
});

//for scrolling of product images bags in explore section

let slideLeftBag = document.getElementById("bag-slide-left");
let slideRightBag = document.getElementById("bag-slide-right");
let slideContentBag = document.querySelector(".bag-wraper");

slideLeftBag.addEventListener("click", function () {
  slideContentBag.scrollLeft -= 165;
});

slideRightBag.addEventListener("click", function () {
  slideContentBag.scrollLeft += 165;
});
/*
jQuery

$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".header").toggleClass("nav-open");
  });
});
*/
