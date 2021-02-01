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
