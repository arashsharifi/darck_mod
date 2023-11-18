//Icons
const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");

//theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)");

// //Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// //Initial Theme Ckeck
const themCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

// //Manual Theme Switch
const themSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

//call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themSwitch();
});

moonIcon.addEventListener("click", () => {
  themSwitch();
});

//invoke theme check on initial load
themCheck();
