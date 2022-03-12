window.addEventListener("DOMContentLoaded", setup);

function setup() {
  function showHideNav() {
    const nav = document.getElementById("header-nav");
    if (nav.classList.contains("slide-in")) {
      nav.classList.remove("slide-in");
    } else {
      nav.classList.add("slide-in");
    }
  }

  const burger = document.getElementById("burger");
  burger.addEventListener("click", showHideNav);

  function slideCloseNav(e) {
    const icon = e.target.children[0].children[0];
    const list = e.target.children[1];

    if (list.offsetHeight === 0) {
      list.classList.remove("hide");
      list.classList.add("show");
      icon.classList.remove("down");
      icon.classList.add("up");
    } else {
      list.classList.remove("show");
      list.classList.add("hide");
      icon.classList.remove("up");
      icon.classList.add("down");
    }
  }

  const navBtns = document.querySelectorAll(".header-nav-button");
  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", function (e) {
      slideCloseNav(e);
    });
  });

  const lis = document.querySelectorAll("#header-nav>ul>li");

  let num = lis.length;
  let delay = 0.3;

  while (num > 0) {
    lis[lis.length - num].style.animationDelay = delay + "s";
    num--;
    delay += 0.3;
  }

  const texts = document.querySelectorAll("p");

  const textsOptions = {
    root: null,
    threshold: 0,
    rootMargin: "50px",
  };
  const textsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, textsOptions);

  texts.forEach((text) => textsObserver.observe(text));

  // sections
  const sections = document.querySelector(".welcome");

  const sectionsOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-250px",
  };

  const sectionsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      if (!entry.isIntersecting) {
        document.querySelector("header").classList.add("orange");
      }

      if (entry.isIntersecting) {
        document.querySelector("header").classList.remove("orange");
      }
    });
  }, sectionsOptions);

  sectionsObserver.observe(sections);
}
