window.onscroll = function () {
  scrollFunction();
};

const navbar = document.getElementsByClassName("navbar")[0];
const loginBtn = document.getElementsByClassName("login-btn")[0];
const links = document.getElementsByClassName("nav-links-container")[0];

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("h-16");
    loginBtn.classList.add("py-2");
    links.classList.add("text-base");
  } else {
    navbar.classList.remove("h-16");
    loginBtn.classList.remove("py-2");
    links.classList.remove("text-base");
  }
}
