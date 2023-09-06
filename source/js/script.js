let navigationNojs = document.querySelector('.navigation--nojs');
navigationNojs.classList.remove('navigation--nojs');

let burger = document.querySelector(".burger");
burger.classList.remove("burger--noscript");
let list = document.querySelector(".navigation__list")

let mapNojs = document.querySelector('.map--noscript');
mapNojs.classList.remove('map--noscript');

(function () {
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    list.classList.toggle("navigation__list--active");
  });
} () );
