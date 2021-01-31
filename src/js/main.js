// sections
const about = document.getElementById("about");
const company = document.getElementById("company");

// buttons
const aboutBtn = document.getElementById("btn-about");
const companyBtn = document.getElementById("btn-company");
const contributeBtn = document.getElementById("btn-contribute");

const scrollOptions = {
  behavior: "smooth",
};

aboutBtn.addEventListener("click", () => {
  about.scrollIntoView(scrollOptions);
});

companyBtn.addEventListener("click", () => {
  company.scrollIntoView(scrollOptions);
});
