"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const navLinksCont = document.querySelector(".nav__links");
const h1 = document.querySelector("h1");
const header = document.querySelector(".header");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const allSections = document.querySelectorAll(".section");
const imgTargets = document.querySelectorAll("img[data-src]");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");

// Functions
const openModal = (event) => {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event handlers
btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", (e) => {
  e.preventDefault();
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

// Page smooth scrolling navigation with event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
navLinksCont.addEventListener("click", (e) => {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// Tabbed component
tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // removing active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );

  // add active class to tab
  clicked.classList.add("operations__tab--active");

  // add active class to content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sibling) => {
      if (sibling !== link) {
        sibling.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

// passing an "argument" into a handler using the bind method
// allows you to pass more arguments inside an event handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// sticky navigation
const navHeight = nav.getBoundingClientRect();

const stickyOptions = {
  root: null,
  threshold: 0, // when the element is no longer in view
  rootMargin: `${-navHeight.height}px`, // minus height of the header 90px
};

const stickyNavCallback = (entries) => {
  const [entry] = entries;
  // console.log(entry);

  // check if target element is intersecting with the DOM RECT
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObs = new IntersectionObserver(stickyNavCallback, stickyOptions);
headerObs.observe(header);

// Reveal sections

const revealSectionCallback = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }
};
const revealSectionOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(
  revealSectionCallback,
  revealSectionOptions
);

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy load images
const loadImgs = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // replace the src with data-src
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", (e) => {
      entry.target.classList.remove("lazy-img");
    });
  }
  observer.unobserve(entry.target);
};

const loadImgOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-300px",
};

const imgObserver = new IntersectionObserver(loadImgs, loadImgOptions);

imgTargets.forEach((img) => {
  return imgObserver.observe(img);
});

// Slider component
const sliderFunc = () => {
  let currentSlide = 0;
  const maxSlide = slides.length - 1;

  // functions
  // create dot indicator
  const createDots = () => {
    slides.forEach((_, index) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };

  // active slide indicator
  const activeDot = (slide) => {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = (currentSlide) => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
  };

  //next slide
  const nextSlide = () => {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  //previous slide
  const previousSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  // event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", previousSlide);
  document.addEventListener("keydown", (e) => {
    // console.log(e);
    e.key === "ArrowLeft" && previousSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });

  // initial state
  const initialSliderState = () => {
    createDots();
    goToSlide(0);
    activeDot(0);
  };

  initialSliderState();
};

sliderFunc();
