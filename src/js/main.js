// sections
const about = document.getElementById("about");
const company = document.getElementById("company");
const menu = document.getElementById("menu");
const contribute = document.getElementById("contribute");

// buttons
const aboutBtn = document.getElementById("btn-about");
const companyBtn = document.getElementById("btn-company");
const contributeBtn = document.getElementById("btn-contribute");
const hamMenu = document.getElementById("hamburger-menu");
const aboutBtnMenu = document.getElementById("btn-about-menu");
const companyBtnMenu = document.getElementById("btn-company-menu");
const contributeBtnMenu = document.getElementById("btn-contribute-menu");

const scrollOptions = {
  behavior: "smooth",
};

aboutBtn.addEventListener("click", () => {
  about.scrollIntoView(scrollOptions);
});

companyBtn.addEventListener("click", () => {
  company.scrollIntoView(scrollOptions);
});

contributeBtn.addEventListener("click", () => {
  contribute.scrollIntoView(scrollOptions);
});

aboutBtnMenu.addEventListener("click", () => {
  about.scrollIntoView(scrollOptions);
});

companyBtnMenu.addEventListener("click", () => {
  company.scrollIntoView(scrollOptions);
});
contributeBtnMenu.addEventListener("click", () => {
  contribute.scrollIntoView(scrollOptions);
});

hamMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

document.addEventListener("scroll", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
});

//animation

const tl = gsap.timeline();
const tlImg = gsap.timeline();
const tlShuttle = gsap.timeline({ repeat: -1, yoyo: true });

tl.from(".hero-heading", {
  duration: 1,
  y: -20,
});
tl.from(
  ".hero-tagline",
  {
    duration: 1,
    y: -20,
  },
  "-=1.3"
);
tl.from(
  "#get-started-btn",
  {
    duration: 1,
    y: -20,
  },
  "-=1.8"
);

tlImg.from(".hero-img", {
  duration: 3,
  x: 80,
  opacity: 0,
  scale: 1.1,
});

tlImg.to(".hero-img", {
  transformOrigin: "50% 50%",
  duration: 10,
  scale: 1.05,
  y: "random(5,15)",
  repeat: -1,
  yoyo: true,
});

tlShuttle.to(".shuttle", {
  transformOrigin: "50% 50%",
  duration: 3,
  rotation: 2,
});
tlShuttle.to(".shuttle", {
  transformOrigin: "50% 50%",
  duration: 3,
  rotation: -2,
});
