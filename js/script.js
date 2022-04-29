// Select elements 
const closeBtnElm = document.querySelector("[data-header-close]"),
      toggleBarsEl = document.querySelector("[data-header-bars]"),
      navbarLinksEl = document.querySelector("[data-header-navlinks]");


// for show responsive navbar side
toggleBarsEl.onclick = function(){
    navbarLinksEl.classList.add("show");
};


// for show responsive navbar side
closeBtnElm.onclick = function(){
    navbarLinksEl.classList.remove("show");
}