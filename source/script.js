(function () {
  const burger = document.querySelector(".burger");
  const list = document.querySelector(".navigation__list")
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    list.classList.toggle("navigation__list--active");
  });
} () );
